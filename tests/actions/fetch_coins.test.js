import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action FETCH_COINS', () => {
    let mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset();
        mock.restore();
    });

    test('should fetch coins from COINMARKETCAP API /v1/ticker', () => {
        const coins = [
            {
                "id": "bitcoin", 
                "name": "Bitcoin", 
                "symbol": "BTC", 
                "rank": "1", 
                "price_usd": "8462.43", 
                "price_btc": "1.0", 
                "24h_volume_usd": "4545730000.0", 
                "market_cap_usd": "143350602350", 
                "available_supply": "16939650.0", 
                "total_supply": "16939650.0", 
                "max_supply": "21000000.0", 
                "percent_change_1h": "-0.33", 
                "percent_change_24h": "-1.55", 
                "percent_change_7d": "3.87", 
                "last_updated": "1522028366"
            }, 
            {
                "id": "ethereum", 
                "name": "Ethereum", 
                "symbol": "ETH", 
                "rank": "2", 
                "price_usd": "521.427", 
                "price_btc": "0.061879", 
                "24h_volume_usd": "1141800000.0", 
                "market_cap_usd": "51317329405.0", 
                "available_supply": "98417093.0", 
                "total_supply": "98417093.0", 
                "max_supply": null, 
                "percent_change_1h": "-0.76", 
                "percent_change_24h": "0.09", 
                "percent_change_7d": "-2.1", 
                "last_updated": "1522028354"
            } 
        ]

        mock.onGet('https://api.coinmarketcap.com/v1/ticker/')
            .reply(200, coins);
        
        const expectedActions = {
            type: types.FETCH_COINS,
            payload: [
                {
                    "id": "bitcoin", 
                    "name": "Bitcoin", 
                    "price_usd": "8462.43",
                },
                {
                    "id": "ethereum", 
                    "name": "Ethereum",
                    "price_usd": "521.427" 
                }
            ]
        };

        const store = mockStore({ coins: [], addedCoins: [] });

        return store.dispatch(actions.fetchCoins()).then(() => {
            expect(store.getActions()).toEqual([expectedActions])
        });
        
    })
})
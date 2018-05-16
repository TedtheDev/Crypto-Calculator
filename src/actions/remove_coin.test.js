import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action REMOVE_COIN', () => {
    test('should remove one coin from addedCoins state along with clearing totalAmountOwnedUSD', () => {
        const addedCoins = [
            {name: 'Bitcoin', id: 'bitcoin', price_usd: 2000},
            {name: 'Ethereum', id: 'ethereum', price_usd: 300}
        ];

        const expectedActions = [
            {
                type: types.TOTAL_AMOUNT_OWNED,
                payload: { previousValue: 0, updatedValue: -2000}
            },
            {
                type: types.REMOVE_COIN,
                payload: 'bitcoin'
            }
        ];

        const store = mockStore({
            coins: [], addedCoins: addedCoins, totalAmountOwnedUSD: 2300
        });

        store.dispatch(actions.removeCoin('bitcoin', 2000));

        expect(store.getActions()).toEqual(expectedActions);
    })
})
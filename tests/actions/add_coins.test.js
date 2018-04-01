import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action ADD_COINS', () => {
    test('should create an action to add one coin', () => {
        const coins = [{name: 'Bitcoin', id: 'bitcoin', price_usd: 2000}];

        const expectedActions = {
            type: types.ADD_COINS,
            payload: coins
        };

        const store = mockStore({ coins: [], addedCoins: [] }); 

        store.dispatch(actions.addCoins(coins))
        expect(store.getActions()).toEqual([expectedActions]);        
    });

    test('should create an action to add two coins', () => {
        const coins = [
            {name: 'Bitcoin', id: 'bitcoin', price_usd: 2000},
            {name: 'Ethereum', id: 'ethereum', price_usd: 300}
        ];

        const expectedActions = {
            type: types.ADD_COINS,
            payload: coins
        };

        const store = mockStore({ coins: [], addedCoins: [] }); 

        store.dispatch(actions.addCoins(coins))
        expect(store.getActions()).toEqual([expectedActions]);        
    });
});
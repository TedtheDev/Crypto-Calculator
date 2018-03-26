import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action REMOVE_COIN', () => {
    test('should remove one coin from addedCoins state', () => {
        const addedCoins = [
            {name: 'Bitcoin', id: 'bitcoin', price_usd: 2000},
            {name: 'Ethereum', id: 'ethereum', price_usd: 300}
        ];

        const expectedActions = {
            type: types.REMOVE_COIN,
            payload: 'bitcoin'
        };

        const store = mockStore({
            coins: [], addedCoins: addedCoins
        });

        store.dispatch(actions.removeCoin('bitcoin'));

        expect(store.getActions()).toEqual([expectedActions]);
    })
})
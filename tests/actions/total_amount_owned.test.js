import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action TOTAL_AMOUNT_OWNED', () => {

    test('should update totalAmountOwnedUSD to the correct value', () => {
        const expectedActions = {
            type: types.TOTAL_AMOUNT_OWNED,
            payload: {previousValue: 100, updatedValue: 300}
        };

        const store = mockStore({
            coins: [], addedCoins: [], TOTAL_AMOUNT_OWNED: 500
        });

        store.dispatch(actions.updateTotalAmountOwnedUSD(100, 300));

        expect(store.getActions()).toEqual([expectedActions]);
    });

});
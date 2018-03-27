import {
    ADD_COINS, 
    FETCH_COINS,
    REMOVE_COIN
} from '../actions/types';

export default function(state = {coins: [], addedCoins: []}, action) {
    switch(action.type) {
        case ADD_COINS:
            const selectedCoins = state.coins.filter(coin => action.payload.includes(coin.id));
            const filteredCoins = state.coins.filter(coin => !action.payload.includes(coin.id));
            let addedCoins = state.addedCoins;
            selectedCoins.map((coin) => addedCoins.push(coin));
            return { ...state, coins: filteredCoins, addedCoins: addedCoins};
        case FETCH_COINS:
            return { ...state, coins: [...action.payload] }
        case REMOVE_COIN:
            let coinToAddBackToList = state.addedCoins.filter(coin => coin.id === action.payload);
            let addedCoinsUpdate = state.addedCoins.filter(coin => coin.id !== action.payload)
            let updatedCoinList = state.coins;
            updatedCoinList.push(coinToAddBackToList[0]);
            return { ...state, coins: updatedCoinList, addedCoins: addedCoinsUpdate};
        default:
            return state;
    }
}
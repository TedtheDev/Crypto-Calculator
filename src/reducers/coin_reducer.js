import {
    ADD_COINS, 
    FETCH_COINS,
    REMOVE_COIN,
    TOTAL_AMOUNT_OWNED,
    TOTAL_AMOUNT_INVESTED,
    LOAD_PORTFOLIO_DATA
} from '../actions/types';

export default function(state = {coins: [], addedCoins: [], totalAmountOwnedUSD: 0, totalAmountInvestedUSD: 0}, action) {
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
        case TOTAL_AMOUNT_OWNED:
            const totalValue = state.totalAmountOwnedUSD + (action.payload.updatedValue - action.payload.previousValue);
            return { ...state, totalAmountOwnedUSD: totalValue }
        case TOTAL_AMOUNT_INVESTED:
            return { ...state, totalAmountInvestedUSD: action.payload}
        case LOAD_PORTFOLIO_DATA:
            
            return { ...state, ...action.payload};
        default:
            return state;
    }
}
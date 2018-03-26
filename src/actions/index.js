import axios from 'axios';
import {
    ADD_COINS,
    FETCH_COINS,
    REMOVE_COIN
} from './types';

const COINMARKETCAP_API_BASE_URL = 'https://api.coinmarketcap.com';

export function fetchCoins() {
    return function(dispatch) {
        return axios.get(`${COINMARKETCAP_API_BASE_URL}/v1/ticker/`)
            .then((response) => {
                const coins = response.data.map((coin) => {
                    return {name: coin.name, id: coin.id, price_usd: coin.price_usd};
                });
                dispatch({ type: FETCH_COINS, payload: coins });
            })
            .catch((err) => console.log(err));
    }
};

export function addCoins(coins) {
    return function(dispatch) {
        if(coins.length !== 0) {
            dispatch({ type: ADD_COINS, payload: coins});
        }
    }
};

export function removeCoin(coinId) {
    return function(dispatch) {
        dispatch({ type: REMOVE_COIN, payload: coinId });
    }
};
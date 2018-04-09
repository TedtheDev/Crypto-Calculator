import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { LOAD_PORTFOLIO_DATA, ADD_COINS } from './actions/types';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

const data = JSON.parse(localStorage.getItem('crypto-calc-data'));

if(data) {
    //dispatch to load currencies
    //store.dispatch({ type: ADD_COINS, payload: data.addedCoins.map(coin => coin.id)})
    store.dispatch({ type: LOAD_PORTFOLIO_DATA, payload: data });
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('.app')
);
import { combineReducers } from 'redux';
import coinReducer from './coin_reducer';

const rootReducer = combineReducers({
    coins: coinReducer
});

export default rootReducer

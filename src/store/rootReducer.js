import {combineReducers} from 'redux';
import {incrementReducer} from './number/reducer';

export default combineReducers({
    number: incrementReducer
});
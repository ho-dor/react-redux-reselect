import {createStore, applyMiddleware} from 'redux';
import CombineReducers from './rootReducer';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

export const store = createStore(CombineReducers, applyMiddleware(thunk, logger));
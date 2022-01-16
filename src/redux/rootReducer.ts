import { combineReducers } from 'redux';
import { driversReducer } from './drivers';
import { carsReducer } from './cars';
import { localeReducer } from './locale';

export default combineReducers({
    driversReducer,
    carsReducer,
    localeReducer,
});

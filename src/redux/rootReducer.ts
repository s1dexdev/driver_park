import { combineReducers } from 'redux';
import { driversReducer } from './drivers';
import { carsReducer } from './cars';

export default combineReducers({
    driversReducer,
    carsReducer,
});

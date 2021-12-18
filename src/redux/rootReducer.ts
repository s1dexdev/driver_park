import { combineReducers } from 'redux';
import { driversReducer } from './drivers/reducer';
import { carsReducer } from './cars/reducer';

export default combineReducers({
    driversReducer,
    carsReducer,
});

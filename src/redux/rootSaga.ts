import { all } from 'redux-saga/effects';
import watchDrivers from './drivers/sagas';
import watchCars from './cars/sagas';

export default function* rootSaga() {
    yield all([watchDrivers(), watchCars()]);
}

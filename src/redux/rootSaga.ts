import { all } from 'redux-saga/effects';
import { watchDrivers } from './drivers';
import { watchCars } from './cars';

export default function* rootSaga() {
    yield all([watchDrivers(), watchCars()]);
}

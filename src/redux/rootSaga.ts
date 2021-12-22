import { all } from '@redux-saga/core/effects';
import { watchDrivers } from './drivers';
import { watchCars } from './cars';

export default function* rootSaga(): Generator {
    yield all([watchDrivers(), watchCars()]);
}

import { all } from '@redux-saga/core/effects';
import { watchDrivers } from './drivers';
import { watchCars } from './cars';
import { watchLocale } from './locale';

export default function* rootSaga(): Generator {
    yield all([watchDrivers(), watchCars(), watchLocale()]);
}

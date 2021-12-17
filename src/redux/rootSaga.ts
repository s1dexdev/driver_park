import { all } from 'redux-saga/effects';
import watchDrivers from './drivers/sagas';

export default function* rootSaga() {
    yield all([watchDrivers()]);
}

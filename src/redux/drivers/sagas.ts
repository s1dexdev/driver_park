import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_DRIVERS_REQUEST, fetchDriversSuccess } from './actions';
import { fetchDrivers } from '../../API/driverService';

export function* fetchDriversSaga(): Generator {
    const drivers = yield call(fetchDrivers);
    yield put(fetchDriversSuccess(drivers));
}

export function* watchDrivers() {
    yield takeEvery(FETCH_DRIVERS_REQUEST, fetchDriversSaga);
}

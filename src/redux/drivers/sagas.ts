import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
    FETCH_DRIVERS_REQUEST,
    fetchDriversSuccess,
    setLoading,
} from './actions';
import { fetchDrivers } from '../../API/driverService';

export function* fetchDriversSaga(): Generator {
    yield put(setLoading(true));
    const drivers = yield call(fetchDrivers);
    yield put(fetchDriversSuccess(drivers));
    yield put(setLoading(false));
}

export function* watchDrivers(): Generator {
    yield takeEvery(FETCH_DRIVERS_REQUEST, fetchDriversSaga);
}

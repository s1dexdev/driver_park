import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/driverService';
import {
    FETCH_DRIVERS_REQUEST,
    DELETE_DRIVER_REQUEST,
    fetchDriversSuccess,
    fetchDriversError,
    deleteDriverSuccess,
    deleteDriverError,
} from './actions';

export function* fetchDriversSaga(): Generator {
    try {
        const drivers = yield call(API.fetchDrivers);
        yield put(fetchDriversSuccess(drivers));
    } catch (error) {
        yield put(fetchDriversError(error));
    }
}

export function* deleteDriverSaga({
    payload,
}: {
    payload: number;
    type: string;
}) {
    try {
        yield call(API.deleteDriver, payload);
        yield put(deleteDriverSuccess(payload));
    } catch (error) {
        yield deleteDriverError(error);
    }
}

export function* watchDrivers(): Generator {
    yield takeLatest(FETCH_DRIVERS_REQUEST, fetchDriversSaga);
    yield takeLatest(DELETE_DRIVER_REQUEST, deleteDriverSaga);
}

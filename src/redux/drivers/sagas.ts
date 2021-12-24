import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/driverService';
import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVER_STATUSES_REQUEST,
    ADD_DRIVER_REQUEST,
    DELETE_DRIVER_REQUEST,
    fetchDriversSuccess,
    fetchDriversError,
    fetchDriverStatusesSuccess,
    fetchDriverStatusesError,
    addDriverSuccess,
    addDriverError,
    deleteDriverSuccess,
    deleteDriverError,
} from './actions';

interface IDriver {
    first_name: string;
    last_name: string;
    date_birth: number;
    status: {
        title: string;
        code: string;
    };
}

interface IParams {
    payload: IDriver;
    type: string;
}

export function* fetchDriversSaga(): Generator {
    try {
        const drivers = yield call(API.fetchDrivers);
        yield put(fetchDriversSuccess(drivers));
    } catch (error) {
        yield put(fetchDriversError(error));
    }
}

export function* fetchDriverStatusesSaga(): Generator {
    try {
        const statuses = yield call(API.fetchDriverStatuses);
        yield put(fetchDriverStatusesSuccess(statuses));
    } catch (error) {
        yield put(fetchDriverStatusesError(error));
    }
}

export function* addDriverSaga({ payload }: IParams): Generator {
    try {
        const driver = yield call(API.addDriver, payload);
        yield put(addDriverSuccess(driver));
    } catch (error) {
        yield put(addDriverError(error));
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
    yield takeLatest(FETCH_DRIVER_STATUSES_REQUEST, fetchDriverStatusesSaga);
    yield takeLatest(ADD_DRIVER_REQUEST, addDriverSaga);
    yield takeLatest(DELETE_DRIVER_REQUEST, deleteDriverSaga);
}

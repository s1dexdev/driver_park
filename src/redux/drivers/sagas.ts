import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/driverService';
import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVER_STATUSES_REQUEST,
    ADD_DRIVER_REQUEST,
    UPDATE_DRIVER_INFO_REQUEST,
    DELETE_DRIVER_REQUEST,
    fetchDriversSuccess,
    fetchDriversError,
    fetchDriverStatusesSuccess,
    fetchDriverStatusesError,
    addDriverSuccess,
    addDriverError,
    updateDriverInfoSuccess,
    updateDriverInfoError,
    deleteDriverSuccess,
    deleteDriverError,
} from './actions';

interface IParams {
    type: string;
    payload: any;
}

function* fetchDriversSaga(): Generator {
    try {
        const drivers = yield call(API.fetchDrivers);
        yield put(fetchDriversSuccess(drivers));
    } catch (error) {
        yield put(fetchDriversError(error));
    }
}

function* fetchDriverStatusesSaga(): Generator {
    try {
        const statuses = yield call(API.fetchDriverStatuses);
        yield put(fetchDriverStatusesSuccess(statuses));
    } catch (error) {
        yield put(fetchDriverStatusesError(error));
    }
}

function* addDriverSaga({ payload }: IParams): Generator {
    try {
        const driver = yield call(API.addDriver, payload);
        yield put(addDriverSuccess(driver));
    } catch (error) {
        yield put(addDriverError(error));
    }
}

function* updateDriverInfoSaga({ payload }: IParams): Generator {
    try {
        const driver = yield call(
            API.updateDriverInfo,
            payload.id,
            payload.info,
        );
        yield put(updateDriverInfoSuccess(driver));
    } catch (error) {
        yield put(updateDriverInfoError(error));
    }
}

function* deleteDriverSaga({ payload }: IParams) {
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
    yield takeLatest(UPDATE_DRIVER_INFO_REQUEST, updateDriverInfoSaga);
    yield takeLatest(DELETE_DRIVER_REQUEST, deleteDriverSaga);
}

import { call, put, takeLatest } from '@redux-saga/core/effects';
import { driverApi } from '../../api/driverService';
import { Status, Driver, Action, InfoUpdate } from '../../types';
import {
    ADD_DRIVER_REQUEST,
    DELETE_DRIVER_REQUEST,
    FETCH_DRIVERS_REQUEST,
    UPDATE_DRIVER_INFO_REQUEST,
    FETCH_DRIVER_STATUSES_REQUEST,
} from './types';
import {
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

interface IUpdateDriver {
    id: number;
    info: Record<string, InfoUpdate>;
}

function* fetchDriversSaga(): Generator {
    try {
        const drivers = (yield call(driverApi.fetchDrivers)) as Driver[];
        yield put(fetchDriversSuccess(drivers));
    } catch (error) {
        yield put(fetchDriversError(error));
    }
}

function* fetchDriverStatusesSaga(): Generator {
    try {
        const statuses = (yield call(
            driverApi.fetchDriverStatuses,
        )) as Status[];
        yield put(fetchDriverStatusesSuccess(statuses));
    } catch (error) {
        yield put(fetchDriverStatusesError(error));
    }
}

function* addDriverSaga<T extends Driver>({ payload }: Action<T>): Generator {
    try {
        const driver = (yield call(driverApi.addDriver, payload)) as Driver;
        yield put(addDriverSuccess(driver));
    } catch (error) {
        yield put(addDriverError(error));
    }
}

function* updateDriverInfoSaga<T extends IUpdateDriver>({
    payload,
}: Action<T>): Generator {
    try {
        const driver = yield call(
            driverApi.updateDriverInfo,
            payload.id,
            payload.info,
        );
        yield put(updateDriverInfoSuccess(driver));
    } catch (error) {
        yield put(updateDriverInfoError(error));
    }
}

function* deleteDriverSaga<T extends number>({ payload }: Action<T>) {
    try {
        yield call(driverApi.deleteDriver, payload);
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

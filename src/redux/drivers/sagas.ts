import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/driverService';
import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVER_STATUSES_REQUEST,
    ADD_DRIVER_REQUEST,
    UPDATE_DRIVER_INFO_REQUEST,
    DELETE_DRIVER_REQUEST,
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

interface IStatus {
    title: string;
    code: string;
}

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    driver_firstname: string;
    driver_lastname: string;
    status: IStatus;
}

interface IParams<T> {
    type: string;
    payload: T;
}

interface IUpdateDriver {
    id: number;
    info: {
        [key: string]: string | number | IStatus;
    };
}

function* fetchDriversSaga(): Generator {
    try {
        const drivers = (yield call(API.fetchDrivers)) as IDriver[];
        yield put(fetchDriversSuccess(drivers));
    } catch (error) {
        yield put(fetchDriversError(error));
    }
}

function* fetchDriverStatusesSaga(): Generator {
    try {
        const statuses = (yield call(API.fetchDriverStatuses)) as IStatus[];
        yield put(fetchDriverStatusesSuccess(statuses));
    } catch (error) {
        yield put(fetchDriverStatusesError(error));
    }
}

function* addDriverSaga<T extends IDriver>({ payload }: IParams<T>): Generator {
    try {
        const driver = (yield call(API.addDriver, payload)) as IDriver;
        yield put(addDriverSuccess(driver));
    } catch (error) {
        yield put(addDriverError(error));
    }
}

function* updateDriverInfoSaga<T extends IUpdateDriver>({
    payload,
}: IParams<T>): Generator {
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

function* deleteDriverSaga<T extends number>({ payload }: IParams<T>) {
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

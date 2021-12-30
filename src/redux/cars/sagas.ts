import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/carService';
import { fetchDriverById } from '../../API/driverService';
import {
    FETCH_CARS_REQUEST,
    FETCH_CAR_STATUSES_REQUEST,
    ADD_CAR_REQUEST,
    UPDATE_CAR_INFO_REQUEST,
    DELETE_CAR_REQUEST,
} from './types';
import {
    fetchCarStatusesSuccess,
    fetchCarStatusesError,
    fetchCarsSuccess,
    fetchCarsError,
    addCarSuccess,
    addCarError,
    updateCarInfoSuccess,
    updateCarInfoError,
    deleteCarSuccess,
    deleteCarError,
} from './actions';

interface IStatus {
    title: string;
    code: string;
}

interface ICar {
    id?: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname?: string;
    driver_lastname?: string;
    status: IStatus;
}

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: IStatus;
}

interface IParams {
    type: string;
    payload: any;
}

function* fetchCarsSaga({ payload }: IParams): Generator {
    try {
        const cars = yield call(API.fetchCars, payload);
        yield put(fetchCarsSuccess(cars));
    } catch (error) {
        yield put(fetchCarsError(error));
    }
}

function* fetchCarStatusesSaga(): Generator {
    try {
        const statuses = yield call(API.fetchCarStatuses);
        yield put(fetchCarStatusesSuccess(statuses));
    } catch (error) {
        fetchCarStatusesError(error);
    }
}

function* addCarSaga({ payload }: IParams): Generator<any, any, any> {
    try {
        const car: ICar = yield call(API.addCar, payload);
        const driver: IDriver = yield call(fetchDriverById, car.driver_id);

        car.driver_firstname = driver.first_name;
        car.driver_lastname = driver.last_name;

        yield put(addCarSuccess(car));
    } catch (error) {
        addCarError(error);
    }
}

function* updateCarInfoSaga({ payload }: IParams): Generator {
    try {
        const car = yield call(API.updateCarInfo, payload.id, payload.info);
        yield put(updateCarInfoSuccess(car));
    } catch (error) {
        yield put(updateCarInfoError(error));
    }
}

function* deleteCarSaga({ payload }: IParams): Generator {
    try {
        yield call(API.deleteCar, payload);
        yield put(deleteCarSuccess(payload));
    } catch (error) {
        yield deleteCarError(error);
    }
}

export function* watchCars(): Generator {
    yield takeLatest(FETCH_CARS_REQUEST, fetchCarsSaga);
    yield takeLatest(FETCH_CAR_STATUSES_REQUEST, fetchCarStatusesSaga);
    yield takeLatest(ADD_CAR_REQUEST, addCarSaga);
    yield takeLatest(UPDATE_CAR_INFO_REQUEST, updateCarInfoSaga);
    yield takeLatest(DELETE_CAR_REQUEST, deleteCarSaga);
}

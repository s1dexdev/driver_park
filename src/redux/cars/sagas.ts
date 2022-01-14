import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../api/carService';
import { fetchDriverById } from '../../api/driverService';
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
    id: number;
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

interface IParams<T> {
    type: string;
    payload: T;
}

interface IUpdateCar {
    id: number;
    info: {
        [key: string]: string | number | IStatus;
    };
}

function* fetchCarsSaga<T extends string>({ payload }: IParams<T>): Generator {
    try {
        const cars = (yield call(API.fetchCars, payload)) as ICar[];
        yield put(fetchCarsSuccess(cars));
    } catch (error) {
        yield put(fetchCarsError(error));
    }
}

function* fetchCarStatusesSaga(): Generator {
    try {
        const statuses = (yield call(API.fetchCarStatuses)) as IStatus[];
        yield put(fetchCarStatusesSuccess(statuses));
    } catch (error) {
        fetchCarStatusesError(error);
    }
}

function* addCarSaga<T extends ICar>({ payload }: IParams<T>): Generator {
    try {
        const car = (yield call(API.addCar, payload)) as ICar;
        const driver = (yield call(fetchDriverById, car.driver_id)) as IDriver;

        car.driver_firstname = driver.first_name;
        car.driver_lastname = driver.last_name;

        yield put(addCarSuccess(car));
    } catch (error) {
        addCarError(error);
    }
}

function* updateCarInfoSaga<T extends IUpdateCar>({
    payload,
}: IParams<T>): Generator {
    try {
        const { id, info } = payload;
        const car = (yield call(API.updateCarInfo, id, info)) as ICar;
        yield put(updateCarInfoSuccess(car));
    } catch (error) {
        yield put(updateCarInfoError(error));
    }
}

function* deleteCarSaga<T extends number>({ payload }: IParams<T>): Generator {
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

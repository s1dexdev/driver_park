import { call, put, takeLatest } from '@redux-saga/core/effects';
import { carApi } from '../../api/carService';
import { driverApi } from '../../api/driverService';
import { Status, Car, Driver, Action, InfoUpdate } from '../../interfaces';
import {
    ADD_CAR_REQUEST,
    DELETE_CAR_REQUEST,
    FETCH_CARS_REQUEST,
    UPDATE_CAR_INFO_REQUEST,
    FETCH_CAR_STATUSES_REQUEST,
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

interface UpdateCar {
    id: number;
    info: Record<string, InfoUpdate>;
}

function* fetchCarsSaga<T extends string>({ payload }: Action<T>): Generator {
    let cars = null;

    try {
        if (payload) {
            cars = (yield call(carApi.fetchCarsOfDriver, payload)) as Car[];
        } else {
            cars = (yield call(carApi.fetchCars)) as Car[];
        }

        yield put(fetchCarsSuccess(cars));
    } catch (error) {
        yield put(fetchCarsError(error));
    }
}

function* fetchCarStatusesSaga(): Generator {
    try {
        const statuses = (yield call(carApi.fetchCarStatuses)) as Status[];
        yield put(fetchCarStatusesSuccess(statuses));
    } catch (error) {
        fetchCarStatusesError(error);
    }
}

function* addCarSaga<T extends Car>({ payload }: Action<T>): Generator {
    try {
        const car = (yield call(carApi.addCar, payload)) as Car;
        const driver = (yield call(
            driverApi.fetchDriverById,
            car.driver_id,
        )) as Driver;

        car.driver_firstname = driver.first_name;
        car.driver_lastname = driver.last_name;

        yield put(addCarSuccess(car));
    } catch (error) {
        addCarError(error);
    }
}

function* updateCarInfoSaga<T extends UpdateCar>({
    payload,
}: Action<T>): Generator {
    try {
        const { id, info } = payload;
        const car = (yield call(carApi.updateCarInfo, id, info)) as Car;
        yield put(updateCarInfoSuccess(car));
    } catch (error) {
        yield put(updateCarInfoError(error));
    }
}

function* deleteCarSaga<T extends number>({ payload }: Action<T>): Generator {
    try {
        yield call(carApi.deleteCar, payload);
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

import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as API from '../../API/carService';
import {
    FETCH_CARS_REQUEST,
    fetchCarsSuccess,
    fetchCarsError,
} from './actions';

function* fetchCarsSaga(): Generator {
    try {
        const cars = yield call(API.fetchCars);
        yield put(fetchCarsSuccess(cars));
    } catch (error) {
        yield put(fetchCarsError(error));
    }
}

export function* watchCars(): Generator {
    yield takeLatest(FETCH_CARS_REQUEST, fetchCarsSaga);
}

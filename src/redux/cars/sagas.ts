import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CARS_REQUEST, fetchCarsSuccess } from './actions';
import { fetchCars } from '../../API/carService';

function* fetchCarsSaga(): Generator {
    const cars = yield call(fetchCars);
    yield put(fetchCarsSuccess(cars));
}

export function* watchCars() {
    yield takeEvery(FETCH_CARS_REQUEST, fetchCarsSaga);
}

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CARS_REQUEST, fetchCarsSuccess, setLoading } from './actions';
import { fetchCars } from '../../API/carService';

function* fetchCarsSaga(): Generator {
    yield put(setLoading(true));
    const cars = yield call(fetchCars);
    yield put(fetchCarsSuccess(cars));
    yield put(setLoading(false));
}

export function* watchCars() {
    yield takeEvery(FETCH_CARS_REQUEST, fetchCarsSaga);
}

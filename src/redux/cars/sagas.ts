import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CARS_REQUEST, fetchCarsSuccess } from './actions';
import { fetchCars } from './operations';

function* sagaWorker(): Generator {
    const data = yield call(fetchCars);
    yield put(fetchCarsSuccess(data));
}

export default function* watchDrivers() {
    yield takeEvery(FETCH_CARS_REQUEST, sagaWorker);
}

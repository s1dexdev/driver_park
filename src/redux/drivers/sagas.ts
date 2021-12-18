import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DRIVERS_REQUEST, fetchDriversSuccess } from './actions';
import { fetchDrivers } from './operations';

function* sagaWorker(): Generator {
    const data = yield call(fetchDrivers);
    yield put(fetchDriversSuccess(data));
}

export default function* watchCars() {
    yield takeEvery(FETCH_DRIVERS_REQUEST, sagaWorker);
}

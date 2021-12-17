import { call, put, select, takeEvery } from 'redux-saga/effects';
import { FETCH_DRIVERS_REQUEST, FETCH_DRIVERS_SUCCESS } from './actions';

async function fetchDrivers() {
    const url = 'https://edu.evgeniychvertkov.com/v1/driver/';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-Authorization':
                'api75c1ca162ce7d7fbac1c65e57dead12934e9fcb800b368c9ccb78d3bcdaf5199',
        },
    });

    const data = await response.json();
    return data;
}

function* sagaWorker(): Generator {
    const payload = yield call(fetchDrivers);
    yield put({ type: FETCH_DRIVERS_SUCCESS, payload });
}

export default function* watchDrivers() {
    yield takeEvery(FETCH_DRIVERS_REQUEST, sagaWorker);
}

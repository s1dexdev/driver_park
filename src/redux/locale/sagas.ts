import { put, takeLatest } from '@redux-saga/core/effects';
import { setLocale } from './actions';
import { SET_LOCALE } from './types';

interface Params {
    type: string;
    payload: string;
}

function setLocaleSaga({ payload }: Params) {
    localStorage.setItem('locale', payload);
    put(setLocale(payload));
}

export function* watchLocale(): Generator {
    yield takeLatest(SET_LOCALE, setLocaleSaga);
}

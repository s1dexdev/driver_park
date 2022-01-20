import { LOCALES } from '../../lang/locales';
import { SET_LOCALE } from './types';
import { Action } from '../../interfaces';

interface State {
    lang: string;
}

const initialState = {
    lang: LOCALES.ENGLISH,
};

export const localeReducer = (state: State, action: Action<string>): State => {
    state = state || initialState;

    switch (action.type) {
        case SET_LOCALE:
            return {
                lang: action.payload,
            };

        default:
            return state;
    }
};

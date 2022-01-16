import { State } from '../../interfaces';

export const langSelector = (state: State): string => state.localeReducer.lang;

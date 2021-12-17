import { IState } from './interfaces';

export const driversSelector = (state: IState) => state.driversReducer.drivers;

import { IState } from './interfaces';

export const carsSelector = (state: IState) => state.carsReducer.cars;

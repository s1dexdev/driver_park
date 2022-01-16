import { Status, Car, State } from '../../interfaces';

const carsSelector = (state: State): Car[] => state.carsReducer.cars;
const statusesSelector = (state: State): Status[] => state.carsReducer.statuses;
const loadingSelector = (state: State): boolean => state.carsReducer.isLoading;

export { carsSelector, statusesSelector, loadingSelector };

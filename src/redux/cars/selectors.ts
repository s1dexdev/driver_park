import { Status, Car } from '../../types';

interface IState {
    carsReducer: {
        cars: Car[];
        statuses: Status[];
        isLoading: boolean;
        error: null | string;
    };
}

const carsSelector = (state: IState): Car[] => state.carsReducer.cars;

const statusesSelector = (state: IState): Status[] =>
    state.carsReducer.statuses;

const loadingSelector = (state: IState): boolean => state.carsReducer.isLoading;

export { carsSelector, statusesSelector, loadingSelector };

import { Driver, Status } from '../../types';

interface IState {
    driversReducer: {
        drivers: Driver[];
        statuses: Status[];
        isLoading: boolean;
    };
}

const driversSelector = (state: IState): Driver[] =>
    state.driversReducer.drivers;

const statusesSelector = (state: IState): Status[] =>
    state.driversReducer.statuses;

const loadingSelector = (state: IState): boolean =>
    state.driversReducer.isLoading;

export { driversSelector, statusesSelector, loadingSelector };

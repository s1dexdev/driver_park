import { Driver, Status, State } from '../../interfaces';

const driversSelector = (state: State): Driver[] =>
    state.driversReducer.drivers;

const statusesSelector = (state: State): Status[] =>
    state.driversReducer.statuses;

const loadingSelector = (state: State): boolean =>
    state.driversReducer.isLoading;

export { driversSelector, statusesSelector, loadingSelector };

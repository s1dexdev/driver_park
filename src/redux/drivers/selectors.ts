interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: {
        title: string;
        code: string;
    };
}

interface IStatus {
    title: string;
    code: string;
}

interface IState {
    driversReducer: {
        drivers: IDriver[];
        statuses: IStatus[];
        isLoading: boolean;
    };
}

export const driversSelector = (state: IState): IDriver[] =>
    state.driversReducer.drivers;

export const statusesSelector = (state: IState): IStatus[] =>
    state.driversReducer.statuses;

export const loadingSelector = (state: IState): boolean =>
    state.driversReducer.isLoading;

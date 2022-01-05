interface IStatus {
    title: string;
    code: string;
}

interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname: string;
    driver_lastname: string;
    status: IStatus;
}

interface IState {
    carsReducer: {
        cars: ICar[];
        statuses: IStatus[];
        isLoading: boolean;
        error: null | string;
    };
}

export const carsSelector = (state: IState): ICar[] => state.carsReducer.cars;

export const statusesSelector = (state: IState): IStatus[] =>
    state.carsReducer.statuses;

export const loadingSelector = (state: IState): boolean =>
    state.carsReducer.isLoading;

export const choiseParameterSortSelector = (state: IState) =>
    state.carsReducer.cars;

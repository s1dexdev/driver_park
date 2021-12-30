interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname?: string;
    driver_lastname?: string;
    status: {
        title: string;
        code: string;
    };
}

interface IStatuse {
    title: string;
    code: string;
}

interface IState {
    carsReducer: {
        cars: ICar[];
        statuses: IStatuse[];
        parametrSort: IParametrSort;
        isLoading: boolean;
        error: null | string;
    };
}

interface IParametrSort {
    class: string;
    isAsc: boolean;
}

export const carsSelector = (state: IState): ICar[] => state.carsReducer.cars;

export const statusesSelector = (state: IState): IStatuse[] =>
    state.carsReducer.statuses;

export const loadingSelector = (state: IState): boolean =>
    state.carsReducer.isLoading;

export const choiseParameterSortSelector = (state: IState) =>
    state.carsReducer.parametrSort;

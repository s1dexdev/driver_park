export interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: {
        title: string;
        code: string;
    };
}

export interface IFetchCarsSuccess {
    type: string;
    payload: ICar[];
}

export interface ICarsState {
    cars: ICar[] | [];
}

export interface IState {
    carsReducer: { cars: ICarsState };
}

export interface IAction {
    type: string;
    payload?: ICar[];
}

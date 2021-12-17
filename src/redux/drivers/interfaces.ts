export interface IDriver {
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

export interface IFetchDriversSuccess {
    type: string;
    payload: IDriver[];
}

export interface IDriversState {
    drivers: IDriver[] | [];
}

export interface IState {
    driversReducer: { drivers: IDriversState };
}

export interface IAction {
    type: string;
    payload?: IDriver[];
}

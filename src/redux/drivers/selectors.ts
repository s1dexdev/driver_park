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

interface IState {
    driversReducer: { drivers: IDriver[] };
}

export const driversSelector = (state: IState): IDriver[] =>
    state.driversReducer.drivers;

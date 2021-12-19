import { FETCH_DRIVERS_SUCCESS } from './actions';

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

interface IDriversState {
    drivers: IDriver[] | [];
}

interface IAction {
    type: string;
    payload?: IDriver[];
}

const initialState: IDriversState = {
    drivers: [],
};

export const driversReducer = (state: IDriversState, action: IAction) => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                drivers: action.payload!,
            };
        default:
            return initialState;
    }
};

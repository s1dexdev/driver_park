import { FETCH_DRIVERS_SUCCESS, SET_LOADING } from './actions';

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
    isLoading: boolean;
}

interface IAction {
    type: string;
    payload: IDriver[] | boolean;
}

const initialDriversState: IDriversState = {
    drivers: [],
    isLoading: false,
};

export const driversReducer = (state: IDriversState, action: IAction) => {
    state = state || initialDriversState;

    switch (action.type) {
        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                drivers: action.payload,
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return initialDriversState;
    }
};

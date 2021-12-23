import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_ERROR,
    DELETE_DRIVER_REQUEST,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_ERROR,
} from './actions';

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
    error: null | string;
}

interface IAction {
    type: string;
    payload: IDriver[] | boolean | number;
}

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const initialDriversState: IDriversState = {
    drivers: [],
    isLoading: setFalse(),
    error: setNull(),
};

export const driversReducer = (state: IDriversState, action: IAction) => {
    state = state || initialDriversState;

    switch (action.type) {
        case FETCH_DRIVERS_REQUEST:
        case DELETE_DRIVER_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };

        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                drivers: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case DELETE_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: state.drivers.filter(
                    ({ id }) => id !== action.payload,
                ),
                isLoading: setFalse(),
                error: setNull(),
            };
        case FETCH_DRIVERS_ERROR:
        case DELETE_DRIVER_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        default:
            return initialDriversState;
    }
};

import {
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_ERROR,
    FETCH_DRIVER_STATUSES_REQUEST,
    FETCH_DRIVER_STATUSES_SUCCESS,
    FETCH_DRIVER_STATUSES_ERROR,
    ADD_DRIVER_REQUEST,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_ERROR,
    UPDATE_DRIVER_INFO_REQUEST,
    UPDATE_DRIVER_INFO_SUCCESS,
    UPDATE_DRIVER_INFO_ERROR,
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
    drivers: IDriver[];
    statuses: { title: string; code: string }[];
    isLoading: boolean;
    error: null | string;
}

interface IAction {
    type: string;
    payload: any;
}

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const initialDriversState: IDriversState = {
    drivers: [],
    statuses: [],
    isLoading: setFalse(),
    error: setNull(),
};

export const driversReducer = (state: IDriversState, action: IAction) => {
    state = state || initialDriversState;

    switch (action.type) {
        case FETCH_DRIVERS_REQUEST:
        case FETCH_DRIVER_STATUSES_REQUEST:
        case ADD_DRIVER_REQUEST:
        case UPDATE_DRIVER_INFO_REQUEST:
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

        case FETCH_DRIVER_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case ADD_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: [...state.drivers, action.payload],
                isLoading: setFalse(),
                error: setNull(),
            };

        case UPDATE_DRIVER_INFO_SUCCESS:
            return {
                ...state,
                drivers: state.drivers.map((driver: IDriver) => {
                    if (driver.id === action.payload.id) {
                        driver = Object.assign({}, driver, action.payload);
                        return driver;
                    }
                    return driver;
                }),
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
        case FETCH_DRIVER_STATUSES_ERROR:
        case ADD_DRIVER_ERROR:
        case UPDATE_DRIVER_INFO_ERROR:
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

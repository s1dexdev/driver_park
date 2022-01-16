import * as Type from './types';
import { Status, Driver, Action } from '../../interfaces';

interface DriversState {
    drivers: Driver[];
    statuses: Status[];
    isLoading: boolean;
    error: Error | null | string;
}

const initialState: DriversState = {
    drivers: [],
    statuses: [],
    isLoading: false,
    error: null,
};

type Sort = (a: Driver, b: Driver) => number;
type Reducer = Driver & Driver[] & Status[] & Error & number & Sort;

export const driversReducer = <T extends Reducer>(
    state: DriversState,
    action: Action<T>,
): DriversState => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_DRIVERS_REQUEST:
        case Type.FETCH_DRIVER_STATUSES_REQUEST:
        case Type.ADD_DRIVER_REQUEST:
        case Type.UPDATE_DRIVER_INFO_REQUEST:
        case Type.DELETE_DRIVER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Type.FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                drivers: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.FETCH_DRIVER_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.ADD_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: [...state.drivers, action.payload],
                isLoading: false,
                error: null,
            };

        case Type.UPDATE_DRIVER_INFO_SUCCESS:
            return {
                ...state,
                drivers: state.drivers.map(driver => {
                    if (driver.id === action.payload.id) {
                        return { ...driver, ...(action.payload as Driver) };
                    }
                    return driver;
                }),
                isLoading: false,
                error: null,
            };

        case Type.DELETE_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: state.drivers.filter(
                    ({ id }) => id !== action.payload,
                ),
                isLoading: false,
                error: null,
            };
        case Type.FETCH_DRIVERS_ERROR:
        case Type.FETCH_DRIVER_STATUSES_ERROR:
        case Type.ADD_DRIVER_ERROR:
        case Type.UPDATE_DRIVER_INFO_ERROR:
        case Type.DELETE_DRIVER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case Type.SORT_ITEMS_DRIVER:
            return {
                ...state,
                drivers: [...state.drivers.sort(action.payload)],
            };

        default:
            return state;
    }
};

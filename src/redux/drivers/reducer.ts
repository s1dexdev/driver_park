import * as Type from './types';

interface IStatus {
    title: string;
    code: string;
}

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: IStatus;
}

interface IDriversState {
    drivers: IDriver[];
    statuses: IStatus[];
    isLoading: boolean;
    error: Error | null | string;
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

interface IAction<T> {
    type: string;
    payload: T;
}

type TSort = (a: IDriver, b: IDriver) => number;

type TReducer = IDriver & IDriver[] & IStatus[] & Error & number & TSort;

export const driversReducer = <T extends TReducer>(
    state: IDriversState,
    action: IAction<T>,
): IDriversState => {
    state = state || initialDriversState;

    switch (action.type) {
        case Type.FETCH_DRIVERS_REQUEST:
        case Type.FETCH_DRIVER_STATUSES_REQUEST:
        case Type.ADD_DRIVER_REQUEST:
        case Type.UPDATE_DRIVER_INFO_REQUEST:
        case Type.DELETE_DRIVER_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };

        case Type.FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                drivers: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.FETCH_DRIVER_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.ADD_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: [...state.drivers, action.payload],
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.UPDATE_DRIVER_INFO_SUCCESS:
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

        case Type.DELETE_DRIVER_SUCCESS:
            return {
                ...state,
                drivers: state.drivers.filter(
                    ({ id }) => id !== action.payload,
                ),
                isLoading: setFalse(),
                error: setNull(),
            };
        case Type.FETCH_DRIVERS_ERROR:
        case Type.FETCH_DRIVER_STATUSES_ERROR:
        case Type.ADD_DRIVER_ERROR:
        case Type.UPDATE_DRIVER_INFO_ERROR:
        case Type.DELETE_DRIVER_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        case Type.SORT_ITEMS_DRIVER:
            return {
                ...state,
                drivers: [
                    ...state.drivers.sort(
                        (itemFirst: IDriver, itemSecond: IDriver) =>
                            action.payload(itemFirst, itemSecond),
                    ),
                ],
            };

        default:
            return initialDriversState;
    }
};

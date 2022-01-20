import * as Type from './types';
import { Status, Car, Action } from '../../interfaces';

interface CarsState {
    cars: Car[];
    statuses: Status[];
    isLoading: boolean;
    error: Error | null | string;
}

type Sort = (a: Car, b: Car) => number;
type Reducer = Car & Car[] & Status[] & Error & number & Sort;

const initialState: CarsState = {
    cars: [],
    statuses: [],
    isLoading: false,
    error: null,
};

export const carsReducer = <T extends Reducer>(
    state: CarsState,
    action: Action<T>,
): CarsState => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_CARS_REQUEST:
        case Type.FETCH_CAR_STATUSES_REQUEST:
        case Type.UPDATE_CAR_INFO_REQUEST:
        case Type.ADD_CAR_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case Type.DELETE_CAR_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case Type.FETCH_CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.FETCH_CAR_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.ADD_CAR_SUCCESS:
            return {
                ...state,
                cars: [...state.cars, action.payload],
                isLoading: false,
                error: null,
            };

        case Type.UPDATE_CAR_INFO_SUCCESS:
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (Number(car.id) === action.payload.id) {
                        return { ...car, ...(action.payload as Car) };
                    }
                    return car;
                }),
                isLoading: false,
                error: null,
            };

        case Type.DELETE_CAR_SUCCESS:
            return {
                ...state,
                cars: state.cars.filter(({ id }) => id !== action.payload),
                isLoading: false,
                error: null,
            };
        case Type.FETCH_CARS_ERROR:
        case Type.FETCH_CAR_STATUSES_ERROR:
        case Type.UPDATE_CAR_INFO_ERROR:
        case Type.ADD_CAR_ERROR:
            return {
                ...state,
                cars: action.payload,
                error: action.payload,
            };
        case Type.DELETE_CAR_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case Type.SORT_ITEMS_CAR:
            return {
                ...state,
                cars: [...state.cars.sort(action.payload)],
            };

        default:
            return state;
    }
};

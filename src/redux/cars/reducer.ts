import * as Type from './types';
import { Status, Car, Action } from '../../types';

interface ICarsState {
    cars: Car[];
    statuses: Status[];
    isLoading: boolean;
    error: Error | null | string;
}

type TSort = (a: Car, b: Car) => number;
type TReducer = Car & Car[] & Status[] & Error & number & TSort;

const initialState: ICarsState = {
    cars: [],
    statuses: [],
    isLoading: false,
    error: null,
};

export const carsReducer = <T extends TReducer>(
    state: ICarsState,
    action: Action<T>,
): ICarsState => {
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
                cars: state.cars.map((car: Car) => {
                    if (Number(car.id) === action.payload.id) {
                        car = Object.assign({}, car, action.payload);
                        return car;
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
                cars: [
                    ...state.cars.sort((itemFirst: Car, itemSecond: Car) =>
                        action.payload(itemFirst, itemSecond),
                    ),
                ],
            };

        default:
            return initialState;
    }
};

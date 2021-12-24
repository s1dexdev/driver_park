import {
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FETCH_CARS_ERROR,
    FETCH_CAR_STATUSES_REQUEST,
    FETCH_CAR_STATUSES_SUCCESS,
    FETCH_CAR_STATUSES_ERROR,
    ADD_CAR_REQUEST,
    ADD_CAR_SUCCESS,
    ADD_CAR_ERROR,
} from './actions';

interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: {
        title: string;
        code: string;
    };
}

interface ICarsState {
    cars: ICar[] | [];
    statuses: { title: string; code: string }[];
    isLoading: boolean;
    error: null | string;
}

interface IAction {
    type: string;
    payload?: ICar[];
}

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const initialState: ICarsState = {
    cars: [],
    statuses: [],
    isLoading: setFalse(),
    error: setNull(),
};

export const carsReducer = (state: ICarsState, action: IAction) => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_CARS_REQUEST:
        case FETCH_CAR_STATUSES_REQUEST:
        case ADD_CAR_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case FETCH_CAR_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };
        case ADD_CAR_SUCCESS:
            return {
                ...state,
                cars: [...state.cars, action.payload],
                isLoading: setFalse(),
                error: setNull(),
            };
        case FETCH_CARS_ERROR:
        case FETCH_CAR_STATUSES_ERROR:
        case ADD_CAR_ERROR:
            return {
                ...state,
                cars: action.payload,
                error: action.payload,
            };

        default:
            return initialState;
    }
};

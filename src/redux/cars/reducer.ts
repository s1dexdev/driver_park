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
    UPDATE_CAR_INFO_REQUEST,
    UPDATE_CAR_INFO_SUCCESS,
    UPDATE_CAR_INFO_ERROR,
    DELETE_CAR_REQUEST,
    DELETE_CAR_SUCCESS,
    DELETE_CAR_ERROR,
    CHOISE_PARAMETR_SORT,
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
    cars: ICar[];
    statuses: { title: string; code: string }[];
    parametrSort: IParametrSort;
    isLoading: boolean;
    error: null | string;
}

interface IAction {
    type: string;
    payload: any;
}

interface IParametrSort {
    class: string;
    isAsc: boolean;
}

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const initialState: ICarsState = {
    cars: [],
    statuses: [],
    parametrSort: {
        class: '',
        isAsc: true,
    },
    isLoading: setFalse(),
    error: setNull(),
};

export const carsReducer = (state: ICarsState, action: IAction) => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_CARS_REQUEST:
        case FETCH_CAR_STATUSES_REQUEST:
        case UPDATE_CAR_INFO_REQUEST:
        case ADD_CAR_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };
        case DELETE_CAR_REQUEST:
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

        case UPDATE_CAR_INFO_SUCCESS:
            return {
                ...state,
                cars: state.cars.map((car: ICar) => {
                    if (Number(car.id) === action.payload.id) {
                        car = Object.assign({}, car, action.payload);
                        return car;
                    }
                    return car;
                }),
                isLoading: setFalse(),
                error: setNull(),
            };

        case DELETE_CAR_SUCCESS:
            return {
                ...state,
                cars: state.cars.filter(({ id }) => id !== action.payload),
                isLoading: setFalse(),
                error: setNull(),
            };
        case FETCH_CARS_ERROR:
        case FETCH_CAR_STATUSES_ERROR:
        case UPDATE_CAR_INFO_ERROR:
        case ADD_CAR_ERROR:
            return {
                ...state,
                cars: action.payload,
                error: action.payload,
            };
        case DELETE_CAR_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        case CHOISE_PARAMETR_SORT:
            return {
                ...state,
                parametrSort: action.payload,
            };

        default:
            return initialState;
    }
};

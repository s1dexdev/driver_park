import { FETCH_CARS_SUCCESS, SET_LOADING } from './actions';

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
    isLoading: boolean;
}

interface IAction {
    type: string;
    payload?: ICar[];
}

const initialState: ICarsState = {
    cars: [],
    isLoading: false,
};

export const carsReducer = (state: ICarsState, action: IAction) => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload,
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return initialState;
    }
};

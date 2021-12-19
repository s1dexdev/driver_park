import { FETCH_CARS_SUCCESS } from './actions';

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
}

interface IAction {
    type: string;
    payload?: ICar[];
}

const initialState: ICarsState = {
    cars: [],
};

export const carsReducer = (state: ICarsState, action: IAction): ICarsState => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload!,
            };
        default:
            return initialState;
    }
};

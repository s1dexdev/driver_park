import { FETCH_CARS_SUCCESS } from './actions';
import { ICarsState, IAction } from './interfaces';

const initialState: any = {
    cars: [],
};

export const carsReducer = (state: ICarsState, action: IAction): ICarsState => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_CARS_SUCCESS:
            return {
                cars: action.payload!,
            };
        default:
            return initialState;
    }
};

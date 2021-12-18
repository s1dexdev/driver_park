import { FETCH_DRIVERS_SUCCESS } from './actions';
import { IDriversState, IAction } from './interfaces';

const initialState: any = {
    drivers: [],
};

export const driversReducer = (
    state: IDriversState,
    action: IAction,
): IDriversState => {
    state = state || initialState;

    switch (action.type) {
        case FETCH_DRIVERS_SUCCESS:
            return {
                drivers: action.payload!,
            };
        default:
            return initialState;
    }
};

interface IAction<P> {
    type: string;
    payload?: P;
}

export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

export const fetchCarsRequest = <P>(): IAction<P> => ({
    type: FETCH_CARS_REQUEST,
});
export const fetchCarsSuccess = <P>(data: P): IAction<P> => ({
    type: FETCH_CARS_SUCCESS,
    payload: data,
});
export const fetchCarsError = <P>(data: P): IAction<P> => ({
    type: FETCH_CARS_ERROR,
    payload: data,
});

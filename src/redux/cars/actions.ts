export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

export const fetchCarsRequest = () => ({
    type: FETCH_CARS_REQUEST,
});
export const fetchCarsSuccess = <T>(data: T) => ({
    type: FETCH_CARS_SUCCESS,
    payload: data,
});
export const fetchCarsError = <T>(data: T) => ({
    type: FETCH_CARS_ERROR,
    payload: data,
});

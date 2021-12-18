export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';

export const fetchCarsRequest = () => ({
    type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = <T>(data: T) => ({
    type: FETCH_CARS_SUCCESS,
    payload: data,
});

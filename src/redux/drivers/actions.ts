export const FETCH_DRIVERS_REQUEST = 'FETCH_DRIVERS_REQUEST';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';

export const ADD_DRIVER_REQUEST = 'ADD_DRIVER_REQUEST';
export const ADD_DRIVER_SUCCESS = 'ADD_DRIVER_SUCCESS';
export const ADD_DRIVER_ERROR = 'ADD_DRIVER_ERROR';

export const DELETE_DRIVER_REQUEST = 'DELETE_DRIVER_REQUEST';
export const DELETE_DRIVER_SUCCESS = 'DELETE_DRIVER_SUCCESS';
export const DELETE_DRIVER_ERROR = 'DELETE_DRIVER_ERROR';

export const fetchDriversRequest = () => ({
    type: FETCH_DRIVERS_REQUEST,
});
export const fetchDriversSuccess = <T>(data: T) => ({
    type: FETCH_DRIVERS_SUCCESS,
    payload: data,
});
export const fetchDriversError = <T>(data: T) => ({
    type: FETCH_DRIVERS_ERROR,
    payload: data,
});

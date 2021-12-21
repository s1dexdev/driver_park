export const FETCH_DRIVERS_REQUEST = 'FETCH_DRIVERS_REQUEST';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';

export const SET_LOADING = 'SET_LOADING';

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
export const setLoading = (data: boolean) => ({
    type: SET_LOADING,
    payload: data,
});

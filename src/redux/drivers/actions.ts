interface IAction<P> {
    type: string;
    payload?: P;
}

export const FETCH_DRIVERS_REQUEST = 'FETCH_DRIVERS_REQUEST';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';

export const FETCH_DRIVER_STATUSES_REQUEST = 'FETCH_DRIVER_STATUSES_REQUEST';
export const FETCH_DRIVER_STATUSES_SUCCESS = 'FETCH_DRIVER_STATUSES_SUCCESS';
export const FETCH_DRIVER_STATUSES_ERROR = 'FETCH_DRIVER_STATUSES_ERROR';

export const ADD_DRIVER_REQUEST = 'ADD_DRIVER_REQUEST';
export const ADD_DRIVER_SUCCESS = 'ADD_DRIVER_SUCCESS';
export const ADD_DRIVER_ERROR = 'ADD_DRIVER_ERROR';

export const DELETE_DRIVER_REQUEST = 'DELETE_DRIVER_REQUEST';
export const DELETE_DRIVER_SUCCESS = 'DELETE_DRIVER_SUCCESS';
export const DELETE_DRIVER_ERROR = 'DELETE_DRIVER_ERROR';

export const fetchDriversRequest = <P>(): IAction<P> => ({
    type: FETCH_DRIVERS_REQUEST,
});
export const fetchDriversSuccess = <P>(data: P): IAction<P> => ({
    type: FETCH_DRIVERS_SUCCESS,
    payload: data,
});
export const fetchDriversError = <P>(data: P): IAction<P> => ({
    type: FETCH_DRIVERS_ERROR,
    payload: data,
});

export const fetchDriverStatusesRequest = <P>(): IAction<P> => ({
    type: FETCH_DRIVER_STATUSES_REQUEST,
});
export const fetchDriverStatusesSuccess = <P>(data: P): IAction<P> => ({
    type: FETCH_DRIVER_STATUSES_SUCCESS,
    payload: data,
});
export const fetchDriverStatusesError = <P>(data: P): IAction<P> => ({
    type: FETCH_DRIVER_STATUSES_ERROR,
    payload: data,
});

export const addDriverRequest = <P>(data: P): IAction<P> => ({
    type: ADD_DRIVER_REQUEST,
    payload: data,
});
export const addDriverSuccess = <P>(data: P): IAction<P> => ({
    type: ADD_DRIVER_SUCCESS,
    payload: data,
});
export const addDriverError = <P>(data: P): IAction<P> => ({
    type: ADD_DRIVER_ERROR,
    payload: data,
});

export const deleteDriverRequest = <P>(data: P): IAction<P> => ({
    type: DELETE_DRIVER_REQUEST,
    payload: data,
});

export const deleteDriverSuccess = <P>(data: P): IAction<P> => ({
    type: DELETE_DRIVER_SUCCESS,
    payload: data,
});

export const deleteDriverError = <P>(data: P): IAction<P> => ({
    type: DELETE_DRIVER_ERROR,
    payload: data,
});

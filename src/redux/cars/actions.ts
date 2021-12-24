interface IAction<P> {
    type: string;
    payload?: P;
}

export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

export const FETCH_CAR_STATUSES_REQUEST = 'FETCH_CAR_STATUSES_REQUEST';
export const FETCH_CAR_STATUSES_SUCCESS = 'FETCH_CAR_STATUSES_SUCCESS';
export const FETCH_CAR_STATUSES_ERROR = 'FETCH_CAR_STATUSES_ERROR';

export const ADD_CAR_REQUEST = 'ADD_CAR_REQUEST';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_ERROR = 'ADD_CAR_ERROR';

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

export const fetchCarStatusesRequest = <P>(): IAction<P> => ({
    type: FETCH_CAR_STATUSES_REQUEST,
});
export const fetchCarStatusesSuccess = <P>(data: P): IAction<P> => ({
    type: FETCH_CAR_STATUSES_SUCCESS,
    payload: data,
});
export const fetchCarStatusesError = <P>(data: P): IAction<P> => ({
    type: FETCH_CAR_STATUSES_ERROR,
    payload: data,
});

export const addCarRequest = <P>(data: P): IAction<P> => ({
    type: ADD_CAR_REQUEST,
    payload: data,
});
export const addCarSuccess = <P>(data: P): IAction<P> => ({
    type: ADD_CAR_SUCCESS,
    payload: data,
});
export const addCarError = <P>(data: P): IAction<P> => ({
    type: ADD_CAR_ERROR,
    payload: data,
});

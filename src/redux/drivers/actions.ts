import * as Type from './types';

interface IAction<P> {
    type: string;
    payload?: P;
}

export const fetchDriversRequest = <P>(): IAction<P> => ({
    type: Type.FETCH_DRIVERS_REQUEST,
});
export const fetchDriversSuccess = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_DRIVERS_SUCCESS,
    payload: data,
});
export const fetchDriversError = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_DRIVERS_ERROR,
    payload: data,
});

export const fetchDriverStatusesRequest = <P>(): IAction<P> => ({
    type: Type.FETCH_DRIVER_STATUSES_REQUEST,
});
export const fetchDriverStatusesSuccess = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_DRIVER_STATUSES_SUCCESS,
    payload: data,
});
export const fetchDriverStatusesError = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_DRIVER_STATUSES_ERROR,
    payload: data,
});

export const addDriverRequest = <P>(data: P): IAction<P> => ({
    type: Type.ADD_DRIVER_REQUEST,
    payload: data,
});
export const addDriverSuccess = <P>(data: P): IAction<P> => ({
    type: Type.ADD_DRIVER_SUCCESS,
    payload: data,
});
export const addDriverError = <P>(data: P): IAction<P> => ({
    type: Type.ADD_DRIVER_ERROR,
    payload: data,
});

export const updateDriverInfoRequest = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_DRIVER_INFO_REQUEST,
    payload: data,
});

export const updateDriverInfoSuccess = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_DRIVER_INFO_SUCCESS,
    payload: data,
});

export const updateDriverInfoError = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_DRIVER_INFO_ERROR,
    payload: data,
});

export const deleteDriverRequest = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_DRIVER_REQUEST,
    payload: data,
});

export const deleteDriverSuccess = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_DRIVER_SUCCESS,
    payload: data,
});

export const deleteDriverError = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_DRIVER_ERROR,
    payload: data,
});

export const sortItemsDriver = <P>(data: P): IAction<P> => ({
    type: Type.SORT_ITEMS_DRIVER,
    payload: data,
});

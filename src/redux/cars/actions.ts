import * as Type from './types';

interface IAction<P> {
    type: string;
    payload?: P;
}

export const fetchCarsRequest = <P>(data?: P): IAction<P> => ({
    type: Type.FETCH_CARS_REQUEST,
    payload: data,
});
export const fetchCarsSuccess = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_CARS_SUCCESS,
    payload: data,
});
export const fetchCarsError = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_CARS_ERROR,
    payload: data,
});

export const fetchCarStatusesRequest = <P>(): IAction<P> => ({
    type: Type.FETCH_CAR_STATUSES_REQUEST,
});
export const fetchCarStatusesSuccess = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_CAR_STATUSES_SUCCESS,
    payload: data,
});
export const fetchCarStatusesError = <P>(data: P): IAction<P> => ({
    type: Type.FETCH_CAR_STATUSES_ERROR,
    payload: data,
});

export const addCarRequest = <P>(data: P): IAction<P> => ({
    type: Type.ADD_CAR_REQUEST,
    payload: data,
});
export const addCarSuccess = <P>(data: P): IAction<P> => ({
    type: Type.ADD_CAR_SUCCESS,
    payload: data,
});
export const addCarError = <P>(data: P): IAction<P> => ({
    type: Type.ADD_CAR_ERROR,
    payload: data,
});

export const updateCarInfoRequest = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_CAR_INFO_REQUEST,
    payload: data,
});

export const updateCarInfoSuccess = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_CAR_INFO_SUCCESS,
    payload: data,
});

export const updateCarInfoError = <P>(data: P): IAction<P> => ({
    type: Type.UPDATE_CAR_INFO_ERROR,
    payload: data,
});

export const deleteCarRequest = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_CAR_REQUEST,
    payload: data,
});

export const deleteCarSuccess = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_CAR_SUCCESS,
    payload: data,
});

export const deleteCarError = <P>(data: P): IAction<P> => ({
    type: Type.DELETE_CAR_ERROR,
    payload: data,
});

export const choiseParameterSort = <P>(data: P): IAction<P> => ({
    type: Type.CHOISE_PARAMETR_SORT,
    payload: data,
});

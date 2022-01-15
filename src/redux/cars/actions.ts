import * as Type from './types';
import { CreateAction } from '../../types';

const createAction: CreateAction = type => data => ({ type, payload: data });

const fetchCarsRequest = createAction(Type.FETCH_CARS_REQUEST);
const fetchCarsSuccess = createAction(Type.FETCH_CARS_SUCCESS);
const fetchCarsError = createAction(Type.FETCH_CARS_ERROR);

const addCarRequest = createAction(Type.ADD_CAR_REQUEST);
const addCarSuccess = createAction(Type.ADD_CAR_SUCCESS);
const addCarError = createAction(Type.ADD_CAR_ERROR);

const deleteCarRequest = createAction(Type.DELETE_CAR_REQUEST);
const deleteCarSuccess = createAction(Type.DELETE_CAR_SUCCESS);
const deleteCarError = createAction(Type.DELETE_CAR_ERROR);

const fetchCarStatusesRequest = createAction(Type.FETCH_CAR_STATUSES_REQUEST);
const fetchCarStatusesSuccess = createAction(Type.FETCH_CAR_STATUSES_SUCCESS);
const fetchCarStatusesError = createAction(Type.FETCH_CAR_STATUSES_ERROR);

const updateCarInfoRequest = createAction(Type.UPDATE_CAR_INFO_REQUEST);
const updateCarInfoSuccess = createAction(Type.UPDATE_CAR_INFO_SUCCESS);
const updateCarInfoError = createAction(Type.UPDATE_CAR_INFO_ERROR);

const sortItemsCar = createAction(Type.SORT_ITEMS_CAR);

export {
    fetchCarsRequest,
    fetchCarsSuccess,
    fetchCarsError,
    addCarRequest,
    addCarSuccess,
    addCarError,
    deleteCarRequest,
    deleteCarSuccess,
    deleteCarError,
    fetchCarStatusesRequest,
    fetchCarStatusesSuccess,
    fetchCarStatusesError,
    updateCarInfoRequest,
    updateCarInfoSuccess,
    updateCarInfoError,
    sortItemsCar,
};

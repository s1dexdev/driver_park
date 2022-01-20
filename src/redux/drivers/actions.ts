import * as Type from './types';
import { createAction } from '../../utils/helpers';

const fetchDriversRequest = createAction(Type.FETCH_DRIVERS_REQUEST);
const fetchDriversSuccess = createAction(Type.FETCH_DRIVERS_SUCCESS);
const fetchDriversError = createAction(Type.FETCH_DRIVERS_ERROR);

const fetchDriverStatusesRequest = createAction(
    Type.FETCH_DRIVER_STATUSES_REQUEST,
);
const fetchDriverStatusesSuccess = createAction(
    Type.FETCH_DRIVER_STATUSES_SUCCESS,
);
const fetchDriverStatusesError = createAction(Type.FETCH_DRIVER_STATUSES_ERROR);

const addDriverRequest = createAction(Type.ADD_DRIVER_REQUEST);
const addDriverSuccess = createAction(Type.ADD_DRIVER_SUCCESS);
const addDriverError = createAction(Type.ADD_DRIVER_ERROR);

const updateDriverInfoRequest = createAction(Type.UPDATE_DRIVER_INFO_REQUEST);
const updateDriverInfoSuccess = createAction(Type.UPDATE_DRIVER_INFO_SUCCESS);
const updateDriverInfoError = createAction(Type.UPDATE_DRIVER_INFO_ERROR);

const deleteDriverRequest = createAction(Type.DELETE_DRIVER_REQUEST);
const deleteDriverSuccess = createAction(Type.DELETE_DRIVER_SUCCESS);
const deleteDriverError = createAction(Type.DELETE_DRIVER_ERROR);

const sortItemsDriver = createAction(Type.SORT_ITEMS_DRIVER);

export {
    fetchDriversRequest,
    fetchDriversSuccess,
    fetchDriversError,
    fetchDriverStatusesRequest,
    fetchDriverStatusesSuccess,
    fetchDriverStatusesError,
    addDriverRequest,
    addDriverSuccess,
    addDriverError,
    updateDriverInfoRequest,
    updateDriverInfoSuccess,
    updateDriverInfoError,
    deleteDriverRequest,
    deleteDriverSuccess,
    deleteDriverError,
    sortItemsDriver,
};

import Axios from 'axios';
import { driverApi } from './driverService';
import { apiConfig } from './apiConfig';
import { Car, Status, InfoUpdate } from '../interfaces';

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

async function fetchCars(): Promise<Car[]> {
    const response = await Axios.get('/car/');
    const { data } = await response.data;
    const cars = await driverApi.addDriverName(data);

    return cars;
}

async function fetchCarsOfDriver(id: string): Promise<Car[]> {
    Axios.defaults.headers.common[apiConfig.driverCars] = `${id}`;

    const response = await Axios.get('/car/');
    const { data } = await response.data;
    const cars = await driverApi.addDriverName(data);

    delete Axios.defaults.headers.common[apiConfig.driverCars];

    return cars;
}

async function fetchCarById(id: number): Promise<Car> {
    const response = await Axios.get(`/car/${id}/`);
    const { data } = response.data;

    return data;
}

async function fetchCarStatuses(): Promise<Status> {
    const response = await Axios.get(`/car-status/`);
    const { data } = response.data;

    return data;
}

async function addCar(car: Car): Promise<Car> {
    const response = await Axios.post(`/car/`, car);
    const { data } = response.data;

    return data;
}

async function deleteCar(id: number): Promise<void> {
    await Axios.delete(`/car/${id}/`);
}

async function updateCarInfo(
    id: number,
    info: Record<string, InfoUpdate>,
): Promise<Car> {
    const response = await Axios.patch(`/car/${id}/`, info);
    const { data } = response.data;

    return data;
}

export const carApi = {
    fetchCars,
    fetchCarsOfDriver,
    fetchCarById,
    fetchCarStatuses,
    addCar,
    deleteCar,
    updateCarInfo,
};

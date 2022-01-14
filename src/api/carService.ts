import Axios from 'axios';
import { addDriverName } from './driverService';
import { apiConfig } from './apiConfig';
import { Car, Status } from '../types';

interface IUpdateInfo {
    [key: string]: string | number | Status;
}

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey || '';

export async function fetchCars(id = ''): Promise<Car[]> {
    if (id) {
        Axios.defaults.headers.common[apiConfig.driverCars] = `${id}`;
    } else {
        delete Axios.defaults.headers.common[apiConfig.driverCars];
    }

    const response = await Axios.get('/car/');
    const { data }: { data: Car[] } = await response.data;
    const cars = await addDriverName(data);

    return cars;
}

export async function fetchCarById(id: number): Promise<Car> {
    const response = await Axios.get(`/car/${id}/`);
    const { data }: { data: Car } = response.data;

    return data;
}

export async function fetchCarStatuses(): Promise<Status> {
    const response = await Axios.get(`/car-status/`);
    const { data }: { data: Status } = response.data;

    return data;
}

export async function addCar(car: Car): Promise<Car> {
    const response = await Axios.post(`/car/`, car);
    const { data }: { data: Car } = response.data;

    return data;
}

export async function deleteCar(id: number): Promise<void> {
    await Axios.delete(`/car/${id}/`);
}

export async function updateCarInfo(
    id: number,
    info: IUpdateInfo,
): Promise<Car> {
    const response = await Axios.patch(`/car/${id}/`, info);
    const { data }: { data: Car } = response.data;

    return data;
}

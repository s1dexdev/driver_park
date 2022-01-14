import Axios from 'axios';
import { apiConfig } from './apiConfig';
import { Driver, Status, Car } from '../types';

interface IUpdateInfo {
    [key: string]: string | number | Status;
}

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey || '';

export async function fetchDrivers(): Promise<Driver[]> {
    const response = await Axios.get('/driver/');
    const { data }: { data: Driver[] } = response.data;

    return data;
}

export async function fetchDriverById(id: number): Promise<Driver> {
    const response = await Axios.get(`/driver/${id}/`);
    const { data }: { data: Driver } = response.data;

    return data;
}

export async function fetchDriverStatuses(): Promise<Status[]> {
    const response = await Axios.get(`/driver-status/`);
    const { data }: { data: Status[] } = response.data;

    return data;
}

export async function addDriver(driver: Driver): Promise<Driver> {
    const response = await Axios.post(`/driver/`, driver);
    const { data }: { data: Driver } = response.data;

    return data;
}

export async function deleteDriver(id: number): Promise<void> {
    await Axios.delete(`/driver/${id}/`);
}

export async function updateDriverInfo(
    id: number,
    info: IUpdateInfo,
): Promise<Driver> {
    const response = await Axios.patch(`/driver/${id}/`, info);
    const { data }: { data: Driver } = response.data;

    return data;
}

export async function addDriverName(cars: Car[]): Promise<Car[]> {
    const drivers = await fetchDrivers();

    const result = cars.reduce((acc: Car[], car) => {
        const driver = drivers.find(({ id }: Driver) => car.driver_id === id);

        if (!driver) {
            return acc;
        }

        const updatedCar = Object.assign({}, car, {
            driver_firstname: driver.first_name,
            driver_lastname: driver.last_name,
        });

        acc.push(updatedCar);

        return acc;
    }, []);

    return result;
}

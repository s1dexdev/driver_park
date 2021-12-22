import Axios from 'axios';
import { addDriverName } from './driverService';
import { apiConfig } from './apiConfig';

interface ICar {
    id?: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname?: string;
    driver_lastname?: string;
    status: {
        title: string;
        code: string;
    };
}

interface ICarStatus {
    title: string;
    code: string;
}

interface IUpdateInfo {
    [key: string]: string | number | ICarStatus;
}

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

export async function fetchCars(): Promise<ICar[]> {
    const response = await Axios.get('/car/');
    const { data }: { data: ICar[] } = await response.data;
    const cars = await addDriverName(data);

    return cars;
}

export async function fetchDriverCars(id: number): Promise<ICar[]> {
    Axios.defaults.headers.common[apiConfig.driverCars] = `${id}`;

    const response = await Axios.get(`/car/`);
    const { data }: { data: ICar[] } = await response.data;

    return data;
}

export async function fetchCarById(id: number): Promise<ICar> {
    const response = await Axios.get(`/car/${id}/`);
    const { data }: { data: ICar } = response.data;

    return data;
}

export async function fetchCarStatus(): Promise<ICarStatus> {
    const response = await Axios.get(`/car-status/`);
    const { data }: { data: ICarStatus } = response.data;

    return data;
}

export async function addCar(car: ICar): Promise<ICar> {
    const response = await Axios.post(`/car/`, car);
    const { data }: { data: ICar } = response.data;

    return data;
}

export async function deleteCar(id: number): Promise<void> {
    await Axios.delete(`/car/${id}/`);
}

export async function updateCarInfo(
    id: number,
    info: IUpdateInfo,
): Promise<ICar> {
    const response = await Axios.patch(`/car/${id}/`, info);
    const { data }: { data: ICar } = response.data;

    return data;
}

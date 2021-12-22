import Axios from 'axios';
import { addDriverName } from './driverService';
import { apiConfig } from './apiConfig';

interface ICar {
    id: number;
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

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

export async function fetchCars(): Promise<ICar[]> {
    const response = await Axios.get('/car/');
    const { data }: { data: ICar[] } = await response.data;
    const cars = await addDriverName(data);

    return cars;
}

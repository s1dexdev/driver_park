import Axios from 'axios';
import { apiConfig } from './apiConfig';

interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: {
        title: string;
        code: string;
    };
}

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

export async function fetchCars(): Promise<ICar[]> {
    const response = await Axios.get('/car/');
    const { data }: { data: ICar[] } = response.data;

    return data;
}

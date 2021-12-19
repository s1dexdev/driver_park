import Axios from 'axios';
import { apiConfig } from './apiConfig';

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: {
        title: string;
        code: string;
    };
}

Axios.defaults.baseURL = apiConfig.baseUrl;
Axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

export async function fetchDrivers(): Promise<IDriver[]> {
    const response = await Axios.get('/driver/');
    const { data }: { data: IDriver[] } = response.data;

    return data;
}

export async function fetchDriverById(id: number): Promise<IDriver> {
    const response = await Axios.get(`/driver/${id}/`);
    const { data }: { data: IDriver } = response.data;

    return data;
}

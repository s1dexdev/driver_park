import Axios, { AxiosRequestConfig } from 'axios';
import { ICar } from './interfaces';
import { apiConfig } from '../../utils/constants';

export async function fetchCars() {
    const config: AxiosRequestConfig<any> = {
        method: 'get',
        url: `${apiConfig.baseUrl}/car/`,
        headers: {
            [apiConfig.headers.authorization]: apiConfig.apiKey,
        },
    };

    const response = await Axios(config);
    const { data }: { data: ICar[] } = response.data;

    return data;
}

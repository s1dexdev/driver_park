import Axios, { AxiosRequestConfig } from 'axios';
import { IDriver } from './interfaces';
import { apiConfig } from '../../utils/constants';

export async function fetchDrivers() {
    const config: AxiosRequestConfig<any> = {
        method: 'get',
        url: `${apiConfig.baseUrl}/driver/`,
        headers: {
            [apiConfig.headers.authorization]: apiConfig.apiKey,
        },
    };

    const response = await Axios(config);
    const { data }: { data: IDriver[] } = response.data;

    return data;
}

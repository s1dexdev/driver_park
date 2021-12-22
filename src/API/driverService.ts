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

export async function addDriverName(cars: ICar[]): Promise<ICar[]> {
    const drivers = await fetchDrivers();

    const result = cars.reduce((acc: ICar[], car) => {
        const driver = drivers.find(({ id }: IDriver) => car.driver_id === id);

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

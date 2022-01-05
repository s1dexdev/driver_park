import { useSelector } from 'react-redux';
import { Car } from '../Car';
import {
    carsSelector,
    choiseParameterSortSelector,
} from '../../../redux/cars/selectors';
import styles from './ListCars.module.scss';

interface IParametrSort {
    class: string;
    isAsc: boolean;
}

interface IStatus {
    title: string;
    code: string;
}

interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname: string;
    driver_lastname: string;
    status: IStatus;
}

export function ListCars(): JSX.Element {
    const cars = useSelector(carsSelector);
    const parametrSort: IParametrSort = useSelector(
        choiseParameterSortSelector,
    );
    const sorting = (a: string, b: string) => {
        if ((parametrSort.isAsc && a > b) || (!parametrSort.isAsc && a < b)) {
            return -1;
        }
        if ((parametrSort.isAsc && a < b) || (!parametrSort.isAsc && a > b)) {
            return 1;
        }
        return 0;
    };

    return (
        <ul className={styles.listCars}>
            {cars
                .sort((a: ICar, b: ICar): number => {
                    if (parametrSort.class === 'status') {
                        return sorting(a.status.code, b.status.code);
                    }
                    const param = parametrSort.class as string & number;

                    return sorting(a[param], b[param]);
                })
                .map(car => (
                    <li key={car.id} className={styles.listCars__item}>
                        <Car car={car} />
                    </li>
                ))}
        </ul>
    );
}

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchDrivers } from '../../../API/driverService';
import { carsSelector } from '../../../redux/cars/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from './ListCars.module.scss';
import { Button } from '../..';

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

export function ListCars(): JSX.Element {
    const [drivers, setDrivers] = useState<IDriver[]>([]);
    const removeCar = <Delete />;
    const cars = useSelector(carsSelector);

    useEffect(() => {
        fetchDrivers().then((data: IDriver[]) => setDrivers(data));
    }, []);

    const deleteCar = (id: number) => {
        console.log(id);
        return true;
    };

    const addDriverName = () => {
        cars.forEach(car => {
            const driver: IDriver = drivers.find(
                (itemDriver: IDriver) => car.driver_id === itemDriver.id,
            )!;

            car.driver_firstname = driver.first_name;
            car.driver_lastname = driver.last_name;
        });
    };

    if (drivers.length > 0) {
        addDriverName();
    }

    return (
        <ul className={styles.listCars}>
            {cars.map(car => (
                <li key={car.id} className={styles.listCars__item}>
                    <ul className={styles.car}>
                        <li key={'checkbox'} className={`${styles.car__item} `}>
                            <input type="checkbox" />
                        </li>
                        <li
                            key={'id'}
                            className={`${styles.car__item} ${styles.car__id}`}
                        >
                            {car.id}
                        </li>
                        <li
                            key={'name'}
                            className={`${styles.car__item} ${styles.car__name}`}
                        >{`${car.driver_firstname} ${car.driver_lastname}`}</li>
                        <li
                            key={'mark'}
                            className={`${styles.car__item} ${styles.car__mark}`}
                        >
                            {car.mark}
                        </li>
                        <li
                            key={'model'}
                            className={`${styles.car__item} ${styles.car__model}`}
                        >
                            {car.model}
                        </li>
                        <li
                            key={'number'}
                            className={`${styles.car__item} ${styles.car__number}`}
                        >
                            {car.number}
                        </li>
                        <li
                            key={'year'}
                            className={`${styles.car__item} ${styles.car__year}`}
                        >
                            {parseDate(car.year)}
                        </li>
                        <li
                            key={'status'}
                            className={`${styles.car__item} ${styles.car__status}`}
                        >
                            {car.status.title}
                        </li>
                        <li
                            key={'actions'}
                            className={`${styles.car__item} ${styles.car__actions}`}
                        >
                            <Button
                                className={styles.delete}
                                name={car.id.toString()}
                                img={removeCar}
                                onClick={() => deleteCar(car.id)}
                            />
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}

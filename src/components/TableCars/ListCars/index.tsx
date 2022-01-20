import { useSelector } from 'react-redux';
import { Car } from '../Car';
import { carsSelector } from '../../../redux/cars/selectors';
import styles from './ListCars.module.scss';

export function ListCars(): JSX.Element {
    const cars = useSelector(carsSelector);

    return (
        <ul className={styles.listCars}>
            {cars.map(car => (
                <li key={car.id} className={styles.listCars__item}>
                    <Car car={car} />
                </li>
            ))}
        </ul>
    );
}

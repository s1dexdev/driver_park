import { useSelector } from 'react-redux';
import { carsSelector } from '../../../redux/cars/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import styles from './ListCars.module.scss';

export function ListCars(): JSX.Element {
    const cars = useSelector(carsSelector);

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
                            {car.year}
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
                            <Delete />
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}

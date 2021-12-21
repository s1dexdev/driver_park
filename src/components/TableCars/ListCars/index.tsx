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
                            className={`${styles.driver__item} ${styles.driver__status}`}
                        >
                            {car.status.title}
                        </li>
                        <li
                            key={'actions'}
                            className={`${styles.driver__item} ${styles.actions}`}
                        >
                            <Delete />
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}

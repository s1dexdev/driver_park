import { useSelector } from 'react-redux';
import { carsSelector } from '../../redux/cars/selectors';
import { TableHeaderCars } from './TableHeaderCars';
import { ListCars } from './ListCars';
import styles from './TableCars.module.scss';

export function TableCars(): JSX.Element {
    const cars = useSelector(carsSelector);

    return (
        <div className={styles.carTable}>
            <p className={styles.carTable__title}>All cars</p>
            <div className={styles.carTable__wrapper}>
                <p className={styles.carTable__numberCars}>
                    {' '}
                    All cars{' '}
                    <span className={styles.carTable__numberCars_color}>
                        ({cars.length})
                    </span>
                </p>
                <TableHeaderCars />
                <ListCars />
            </div>
        </div>
    );
}

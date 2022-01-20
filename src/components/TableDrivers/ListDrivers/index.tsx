import { useSelector } from 'react-redux';
import { Driver } from '../Driver';
import { driversSelector } from '../../../redux/drivers/selectors';
import styles from './ListDrivers.module.scss';

export function ListDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);

    return (
        <ul className={styles.listDrivers}>
            {drivers.map(driver => (
                <li key={driver.id} className={styles.listDrivers__item}>
                    <Driver driver={driver} />
                </li>
            ))}
        </ul>
    );
}

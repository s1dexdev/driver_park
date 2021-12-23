import { useSelector } from 'react-redux';
import { useState } from 'react';
import { driversSelector } from '../../../redux/drivers/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import styles from './ListDrivers.module.scss';

export function ListDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);
    const [statusActive, setStatusActive] = useState(false);

    const deleteDriver = (id: number) => {
        return true;
    };

    const showCar = (id: number) => {
        return true;
    };

    const selectStatus = () => {
        setStatusActive(true);
        return true;
    };

    return (
        <ul className={styles.listDrivers}>
            {drivers.map(driver => (
                <li key={driver.id} className={styles.listDrivers__item}>
                    <ul className={styles.driver}>
                        <li
                            key={'checkbox'}
                            className={`${styles.driver__item} `}
                        >
                            <input type="checkbox" />
                        </li>
                        <li
                            key={'id'}
                            className={`${styles.driver__item} ${styles.driver__id}`}
                        >
                            {driver.id}
                        </li>
                        <li
                            key={'name'}
                            className={`${styles.driver__item} ${styles.driver__name}`}
                        >
                            {`${driver.first_name} ${driver.last_name}`}
                        </li>
                        <li
                            key={'regDate'}
                            className={`${styles.driver__item} ${styles.driver__regDate}`}
                        >
                            {parseDate(driver.date_created)}
                        </li>
                        <li
                            key={'birthDate'}
                            className={`${styles.driver__item} ${styles.driver__birthDate}`}
                        >
                            {parseDate(driver.date_birth)}
                        </li>
                        <li
                            key={'status'}
                            className={`${styles.driver__item} ${styles.driver__status}`}
                        >
                            <div className={styles.driver__status_dropDown}>
                                <button
                                    onClick={selectStatus}
                                    className={styles.driver__status_dropBtn}
                                >
                                    {driver.status.title}
                                </button>
                                <ul
                                    className={
                                        styles.driver__status_dropDownContent
                                    }
                                >
                                    <li>Активный</li>
                                    <li>Не активный</li>
                                    <li>Заблокирован</li>
                                </ul>
                            </div>
                        </li>
                        <li
                            key={'action'}
                            className={`${styles.driver__item} ${styles.driver__action}`}
                        >
                            <Delete
                                className={styles.tableHeader__iconDelete}
                                name={driver.id.toString()}
                                onClick={() => deleteDriver(driver.id)}
                            />
                            <Car
                                className={styles.tableHeader__iconCar}
                                onClick={() => showCar(driver.id)}
                            />
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}

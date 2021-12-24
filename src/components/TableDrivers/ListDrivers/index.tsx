import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDriverRequest } from '../../../redux/drivers/actions';
import {
    driversSelector,
    statusesSelector,
} from '../../../redux/drivers/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import styles from './ListDrivers.module.scss';

export function ListDrivers(): JSX.Element {
    const dispatch = useDispatch();
    const [statusActive, setStatusActive] = useState(false);
    const drivers = useSelector(driversSelector);
    const statuses = useSelector(statusesSelector);

    const deleteDriver = (id: number) => {
        dispatch(deleteDriverRequest(id));
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
                                    {statuses.map(({ title }) => (
                                        <li key={title}>{title}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li
                            key={'action'}
                            className={`${styles.driver__item} ${styles.driver__action}`}
                        >
                            <Delete
                                className={styles.tableHeader__iconDelete}
                                onClick={() => deleteDriver(driver.id)}
                                name={driver.id.toString()}
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

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDriverRequest } from '../../../redux/drivers/actions';
import { driversSelector } from '../../../redux/drivers/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import styles from './ListDrivers.module.scss';
import { Button } from '../../Button';
import { statusDrivers } from './statusDrivers';

export function ListDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);
    const dispatch = useDispatch();

    const deleteDriver = (id: number) => {
        dispatch(deleteDriverRequest(id));
    };

    const showCar = (id: number) => {
        return true;
    };

    const [focusElement, setFocusElement] = useState('');
    const [active, setActive] = useState(false);

    const selectStatus = (idDriver: string) => {
        setActive(!active);
        setFocusElement(idDriver);
        return true;
    };

    const choiseStatus = (status: string) => {
        console.log(status);
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
                            <Button
                                className={styles.dropdown}
                                onClick={() =>
                                    selectStatus(driver.id.toString())
                                }
                                text={driver.status.title}
                                name={driver.id.toString()}
                            />
                            <ul
                                id={driver.id.toString()}
                                className={
                                    styles[
                                        active &&
                                        focusElement === driver.id.toString()
                                            ? 'dropdownContent__active'
                                            : 'dropdownContent'
                                    ]
                                }
                            >
                                {statusDrivers.map(status => {
                                    return (
                                        <li
                                            key={status}
                                            className={
                                                styles.dropdownContent__li
                                            }
                                            onClick={() => choiseStatus(status)}
                                        >
                                            {status}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/*<div className={styles.driver__status_dropDown}>
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
                            </div>*/}
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

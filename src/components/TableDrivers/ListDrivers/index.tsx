import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Modal, DeleteForm } from '../../';
import { deleteDriverRequest } from '../../../redux/drivers/actions';
import {
    driversSelector,
    statusesSelector,
} from '../../../redux/drivers/selectors';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import { navConfig } from '../../../utils/constants';
import styles from './ListDrivers.module.scss';

export function ListDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);
    const statuses = useSelector(statusesSelector);
    const [statusActive, setStatusActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [focusElement, setFocusElement] = useState('');
    const [driverId, setDriverId] = useState(0);

    const showDeleteDriverForm = (id: number) => {
        setDriverId(id);
        setModalActive(true);
    };

    const showDriverCars = (id: number) => {
        return true;
    };

    const selectStatus = (idDriver: string) => {
        setStatusActive(!statusActive);
        setFocusElement(idDriver);
        return true;
    };

    const choiseStatus = (status: string) => {
        console.log(status);
        return true;
    };

    return (
        <>
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
                                            statusActive &&
                                            focusElement ===
                                                driver.id.toString()
                                                ? 'dropdownContent__active'
                                                : 'dropdownContent'
                                        ]
                                    }
                                >
                                    {statuses.map(({ title }) => (
                                        <li
                                            key={title}
                                            className={
                                                styles.dropdownContent__li
                                            }
                                            onClick={() => choiseStatus(title)}
                                        >
                                            {title}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li
                                key={'action'}
                                className={`${styles.driver__item} ${styles.driver__action}`}
                            >
                                <Delete
                                    className={styles.tableHeader__iconDelete}
                                    onClick={() =>
                                        showDeleteDriverForm(driver.id)
                                    }
                                    name={driver.id.toString()}
                                />

                                <Link
                                    className={styles.driver__linkCars}
                                    to={`${navConfig.drivers.path}/${driver.id}`}
                                >
                                    <Car
                                        className={styles.tableHeader__iconCar}
                                        onClick={() =>
                                            showDriverCars(driver.id)
                                        }
                                    />
                                </Link>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <DeleteForm
                    id={driverId}
                    text="driver and his all cars "
                    deleteAction={deleteDriverRequest}
                    setActiveModal={setModalActive}
                />
            </Modal>
        </>
    );
}

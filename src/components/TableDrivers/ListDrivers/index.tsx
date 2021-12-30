import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, DeleteForm, DriverNameForm } from '../../';
import {
    updateDriverInfoRequest,
    deleteDriverRequest,
} from '../../../redux/drivers/actions';
import {
    driversSelector,
    statusesSelector,
} from '../../../redux/drivers/selectors';
import { navConfig } from '../../../utils/constants';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import styles from './ListDrivers.module.scss';

interface IStatus {
    title: string;
    code: string;
}

interface IUpdateData {
    [key: string]: string | number | IStatus;
}

export function ListDrivers(): JSX.Element {
    const dispatch = useDispatch();
    const drivers = useSelector(driversSelector);
    const statuses = useSelector(statusesSelector);

    const [statusActive, setStatusActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [focusElement, setFocusElement] = useState(0);
    const [driverId, setDriverId] = useState(0);
    const [driverName, setDriverName] = useState('');
    const [stateInput, setStateInput] = useState(false);

    const showDeleteDriverForm = (id: number) => {
        setDriverId(id);
        setModalActive(true);
    };

    const selectStatus = (id: number) => {
        setStatusActive(!statusActive);
        setFocusElement(id);
    };

    const updateDriverInfo = (id: number, data: IUpdateData) => {
        const driver = {
            id,
            info: data,
        };

        dispatch(updateDriverInfoRequest(driver));
    };

    const handleClick = (id: number, event: MouseEvent) => {
        const span = event.target as HTMLElement;

        setStateInput(true);
        setDriverId(id);
        setDriverName(span.textContent!);
    };

    const changeStateInput = (newState: boolean) => setStateInput(newState);

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
                                {stateInput && driverId === driver.id ? (
                                    <DriverNameForm
                                        id={driver.id}
                                        currentName={driverName}
                                        updateDriverInfo={updateDriverInfo}
                                        changeStateInput={changeStateInput}
                                    />
                                ) : (
                                    <span
                                        className={styles.driver__nameWrap}
                                        onClick={event =>
                                            handleClick(driver.id, event)
                                        }
                                    >{`${driver.first_name} ${driver.last_name}`}</span>
                                )}
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
                                    className={`${styles.dropdown} ${
                                        styles[driver.status.code]
                                    }`}
                                    onClick={() => selectStatus(driver.id)}
                                    text={driver.status.title}
                                    name={driver.id.toString()}
                                />
                                <ul
                                    id={driver.id.toString()}
                                    className={
                                        styles[
                                            statusActive &&
                                            focusElement === driver.id
                                                ? 'dropdownContent__active'
                                                : 'dropdownContent'
                                        ]
                                    }
                                >
                                    {statuses.map(({ title, code }) => (
                                        <li
                                            key={title}
                                            className={
                                                styles.dropdownContent__li
                                            }
                                            onClick={() =>
                                                updateDriverInfo(driver.id, {
                                                    status: { title, code },
                                                })
                                            }
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
                                <Link
                                    className={styles.driver__linkCars}
                                    to={`${navConfig.drivers.path}/${driver.id}`}
                                >
                                    <Car
                                        className={styles.tableHeader__iconCar}
                                    />
                                </Link>

                                <Delete
                                    className={styles.tableHeader__iconDelete}
                                    onClick={() =>
                                        showDeleteDriverForm(driver.id)
                                    }
                                    name={driver.id.toString()}
                                />
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

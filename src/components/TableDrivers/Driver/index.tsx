import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    DriverNameForm,
    DeleteForm,
    StatusesList,
    Modal,
} from '../../';
import {
    updateDriverInfoRequest,
    deleteDriverRequest,
} from '../../../redux/drivers/actions';
import { statusesSelector } from '../../../redux/drivers/selectors';
import { navConfig } from '../../../utils/constants';
import { parseDate } from '../../../helpers';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Car } from '../../../images/car.svg';
import styles from './Driver.module.scss';

interface IStatus {
    title: string;
    code: string;
}

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: IStatus;
}

interface IUpdateData {
    [key: string]: string | number | IStatus;
}

export function Driver({ driver }: { driver: IDriver }): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const [stateInput, setStateInput] = useState(false);
    const [driverId, setDriverId] = useState(0);
    const [driverName, setDriverName] = useState('');
    const [showStatusList, setShowStatusList] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const updateDriverInfo = (id: number, data: IUpdateData) => {
        const updates = {
            id,
            info: data,
        };

        dispatch(updateDriverInfoRequest(updates));
    };

    const changeStateInput = (newState: boolean) => setStateInput(newState);

    const handleClickInput = (id: number, event: MouseEvent) => {
        const { textContent } = event.target as HTMLSpanElement;

        setStateInput(true);
        setDriverId(id);

        if (textContent) {
            setDriverName(textContent);
        }
    };

    const handleClickStatus = (id: number) => {
        setDriverId(id);
        setShowStatusList(true);
    };

    const showDeleteDriverForm = (id: number) => {
        setDriverId(id);
        setModalActive(true);
    };

    return (
        <>
            <ul className={styles.driver}>
                <li key={'checkbox'} className={`${styles.driver__item} `}>
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
                                handleClickInput(driver.id, event)
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
                        onClick={() => handleClickStatus(driver.id)}
                        text={driver.status.title}
                        name={driver.id.toString()}
                    />
                    {showStatusList && driverId === driver.id && (
                        <StatusesList
                            statuses={statuses}
                            id={driver.id}
                            onUpdateInfo={updateDriverInfo}
                            setShowStatusList={setShowStatusList}
                        />
                    )}
                </li>
                <li
                    key={'action'}
                    className={`${styles.driver__item} ${styles.driver__action}`}
                >
                    <div className={styles.actionButtons}>
                        <Link
                            className={styles.actionButtons__viewCars}
                            to={`${navConfig.drivers.path}/${driver.id}`}
                        >
                            <Car
                                className={styles.actionButtons__viewCarsIcon}
                            />
                        </Link>

                        <Button
                            img={<Delete />}
                            className={styles.actionButtons__deleteDriver}
                            onClick={() => showDeleteDriverForm(driver.id)}
                        />
                    </div>
                </li>
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

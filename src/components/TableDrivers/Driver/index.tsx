import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DriverNameForm, DeleteForm, StatusesList, Modal } from '../../';
import { Translate } from '../../../lang';
import {
    updateDriverInfoRequest,
    deleteDriverRequest,
} from '../../../redux/drivers/actions';
import { statusesSelector } from '../../../redux/drivers/selectors';
import { navConfig } from '../../../utils/constants';
import { ReactComponent as Delete } from '../../../assets/images/delete.svg';
import { ReactComponent as Car } from '../../../assets/images/car.svg';
import styles from './Driver.module.scss';
import { InfoUpdate, Driver as DriverType } from '../../../types';

export function Driver({ driver }: { driver: DriverType }): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const [stateInput, setStateInput] = useState(false);
    const [driverId, setDriverId] = useState(0);
    const [driverName, setDriverName] = useState('');
    const [showStatusList, setShowStatusList] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const updateDriverInfo = (id: number, data: Record<string, InfoUpdate>) => {
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

    const parseDate = (date: number): string =>
        new Date(date).toLocaleDateString();

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
                    <button
                        type="button"
                        className={`${styles.dropdown} ${
                            styles[driver.status.code]
                        }`}
                        onClick={() => handleClickStatus(driver.id)}
                    >
                        {Translate(`${driver.status.code}`)}
                    </button>
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

                        <button
                            type="button"
                            className={styles.actionButtons__deleteDriver}
                            onClick={() => showDeleteDriverForm(driver.id)}
                        >
                            {<Delete />}
                        </button>
                    </div>
                </li>
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <DeleteForm
                    id={driverId}
                    text={Translate('deleteDriverText')}
                    deleteAction={deleteDriverRequest}
                    setActiveModal={setModalActive}
                />
            </Modal>
        </>
    );
}

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, CarForm, DeleteForm, StatusesList } from '../../../components';
import {
    updateCarInfoRequest,
    deleteCarRequest,
} from '../../../redux/cars/actions';
import { statusesSelector } from '../../../redux/cars/selectors';
import { Translate } from '../../../lang';
import { ReactComponent as Delete } from '../../../assets/images/delete.svg';
import { ReactComponent as Plus } from '../../../assets/images/plus.svg';
import styles from './Car.module.scss';
import { InfoUpdate, Car as CarType } from '../../../interfaces';

export function Car({ car }: { car: CarType }): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const [carId, setCarId] = useState(0);
    const [showStatusList, setShowStatusList] = useState(false);
    const [formType, setFormType] = useState(false);
    const [driverId, setDriverId] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const handleStatusClick = (id: number) => {
        setCarId(id);
        setShowStatusList(true);
    };

    const updateCarInfo = (id: number, data: Record<string, InfoUpdate>) => {
        const updates = {
            id,
            info: data,
        };

        dispatch(updateCarInfoRequest(updates));
    };

    const renderModalCar = (id: number) => {
        setDriverId(id);
        setFormType(true);
        setModalActive(true);
    };

    const showDeleteCarForm = (id: number) => {
        setCarId(id);
        setFormType(false);
        setModalActive(true);
    };

    return (
        <>
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
                    key={'name'}
                    className={`${styles.car__item} ${styles.car__name}`}
                >
                    {`${car.driver_firstname} ${car.driver_lastname}`}
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
                    {car.year}
                </li>
                <li
                    key={'status'}
                    className={`${styles.car__item} ${styles.car__status}`}
                >
                    <button
                        type="button"
                        className={`${styles.dropdown} ${
                            styles[car.status.code]
                        }`}
                        onClick={() => handleStatusClick(car.id)}
                    >
                        {Translate(`${car.status.code}`)}
                    </button>
                    {showStatusList && carId === car.id && (
                        <StatusesList
                            statuses={statuses}
                            id={car.id}
                            onUpdateInfo={updateCarInfo}
                            setShowStatusList={setShowStatusList}
                        />
                    )}
                </li>
                <li
                    key={'action'}
                    className={`${styles.car__item} ${styles.car__action}`}
                >
                    <button
                        type="button"
                        className={styles.car__actionBtn}
                        onClick={() => renderModalCar(car.driver_id)}
                    >
                        {<Plus />}
                    </button>
                    <button
                        type="button"
                        className={styles.car__actionBtn}
                        onClick={() => showDeleteCarForm(car.id)}
                    >
                        {<Delete />}
                    </button>
                </li>
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                {formType ? (
                    <CarForm id={driverId} />
                ) : (
                    <DeleteForm
                        id={carId}
                        text={Translate('deleteCarText')}
                        deleteAction={deleteCarRequest}
                        setActiveModal={setModalActive}
                    />
                )}
            </Modal>
        </>
    );
}

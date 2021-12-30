import { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, DeleteForm, CarForm, Statuses } from '../../';
import {
    updateCarInfoRequest,
    deleteCarRequest,
} from '../../../redux/cars/actions';
import { carsSelector, statusesSelector } from '../../../redux/cars/selectors';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Plus } from '../../../images/plus.svg';
import styles from './ListCars.module.scss';

interface IStatus {
    title: string;
    code: string;
}

interface IUpdateData {
    [key: string]: string | number | IStatus;
}

export function ListCars(): JSX.Element {
    const dispatch = useDispatch();
    const cars = useSelector(carsSelector);
    const statuses = useSelector(statusesSelector);

    const [modalActive, setModalActive] = useState(false);
    const [carId, setCarId] = useState(0);
    const [driverId, setDriverId] = useState(0);
    const [formType, setFormType] = useState(false);

    const removeCar = <Delete />;
    const addCar = <Plus />;

    const resetIdCar = () => setCarId(0);

    const handleClick = (id: number) => {
        setCarId(id);
    };

    const showDeleteCarForm = (id: number) => {
        setCarId(id);
        setFormType(false);
        setModalActive(true);
    };

    const updateCarInfo = (id: number, data: IUpdateData) => {
        const car = {
            id,
            info: data,
        };

        dispatch(updateCarInfoRequest(car));
    };

    const renderModalCar = (id: number) => {
        setDriverId(id);
        setFormType(true);
        setModalActive(true);
    };

    return (
        <>
            <ul className={styles.listCars}>
                {cars.map(car => (
                    <li key={car.number} className={styles.listCars__item}>
                        <ul className={styles.car}>
                            <li
                                key={'checkbox'}
                                className={`${styles.car__item} `}
                            >
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
                                <Button
                                    className={styles.dropdown}
                                    onClick={() => handleClick(car.id)}
                                    text={car.status.title}
                                    name={car.id.toString()}
                                />
                                {carId === car.id ? (
                                    <Statuses
                                        statuses={statuses}
                                        id={car.id}
                                        resetIdCar={resetIdCar}
                                        updateCarInfo={updateCarInfo}
                                    />
                                ) : (
                                    <></>
                                )}
                            </li>
                            <li
                                key={'action'}
                                className={`${styles.car__item} ${styles.car__action}`}
                            >
                                <Button
                                    img={addCar}
                                    name={car.id.toString()}
                                    className={styles.listCars__actionBtn}
                                    onClick={() =>
                                        renderModalCar(car.driver_id)
                                    }
                                />
                                <Button
                                    img={removeCar}
                                    name={car.id.toString()}
                                    className={styles.listCars__actionBtn}
                                    onClick={() => showDeleteCarForm(car.id)}
                                />
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                {formType ? (
                    <CarForm id={driverId} />
                ) : (
                    <DeleteForm
                        id={carId}
                        text="car "
                        deleteAction={deleteCarRequest}
                        setActiveModal={setModalActive}
                    />
                )}
            </Modal>
        </>
    );
}

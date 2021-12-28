import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, DeleteForm, CarForm } from '../../';
import { deleteCarRequest } from '../../../redux/cars/actions';
import { carsSelector, statusesSelector } from '../../../redux/cars/selectors';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Plus } from '../../../images/plus.svg';
import styles from './ListCars.module.scss';

export function ListCars(): JSX.Element {
    const cars = useSelector(carsSelector);
    const statuses = useSelector(statusesSelector);

    const [modalActive, setModalActive] = useState(false);
    const [focusElement, setFocusElement] = useState('');
    const [active, setActive] = useState(false);
    const [carId, setCarId] = useState(0);
    const [formType, setFormType] = useState(false);

    const removeCar = <Delete />;
    const addCar = <Plus />;

    const showDeleteCarForm = (id: number) => {
        setFormType(false);
        setCarId(id);
        setModalActive(true);
    };

    const selectStatus = (idCar: string) => {
        setActive(!active);
        setFocusElement(idCar);
    };

    const choiseStatus = (status: string) => {
        return true;
    };

    const renderModalCar = (id: number, b: boolean) => {
        setCarId(id);
        setFormType(true);
        setModalActive(true);
    };

    return (
        <>
            <ul className={styles.listCars}>
                {cars.map(car => (
                    <li key={car.id} className={styles.listCars__item}>
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
                                    onClick={() =>
                                        selectStatus(car.id.toString())
                                    }
                                    text={car.status.title}
                                    name={car.id.toString()}
                                />
                                <ul
                                    id={car.id.toString()}
                                    className={
                                        styles[
                                            active &&
                                            focusElement === car.id.toString()
                                                ? 'dropdownContent__active'
                                                : 'dropdownContent'
                                        ]
                                    }
                                >
                                    {statuses.map(({ title }, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    styles.dropdownContent__li
                                                }
                                                onClick={() =>
                                                    choiseStatus(title)
                                                }
                                            >
                                                {title}
                                            </li>
                                        );
                                    })}
                                </ul>
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
                                        renderModalCar(car.driver_id, true)
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
                    <CarForm id={carId} />
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

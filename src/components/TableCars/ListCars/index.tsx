import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, DeleteForm, CarForm } from '../../';
import {
    updateCarInfoRequest,
    deleteCarRequest,
    choiseParameterSort,
} from '../../../redux/cars/actions';
import {
    carsSelector,
    statusesSelector,
    choiseParameterSortSelector,
} from '../../../redux/cars/selectors';
import { ReactComponent as Delete } from '../../../images/delete.svg';
import { ReactComponent as Plus } from '../../../images/plus.svg';
import styles from './ListCars.module.scss';
import { Statuses } from '../../Statuses';

export function ListCars(): JSX.Element {
    const dispatch = useDispatch();
    const cars = useSelector(carsSelector);
    const statuses = useSelector(statusesSelector);
    const parametrSort = useSelector(choiseParameterSortSelector);

    const [modalActive, setModalActive] = useState(false);
    const [focusElement, setFocusElement] = useState('');
    const [active, setActive] = useState(false);
    const [carId, setCarId] = useState(0);
    const [driverId, setDriverId] = useState(0);
    const [formType, setFormType] = useState(false);
    const [activeBackDrop, setActiveBackDrop] = useState(true);

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

    const activateBackDrop = (isActive: boolean) => {
        setActiveBackDrop(isActive);
        setActive(!isActive);
    };

    const updateCarStatus = (id: number, title: string, code: string) => {
        const car = {
            id,
            info: {
                status: {
                    title,
                    code,
                },
            },
        };

        dispatch(updateCarInfoRequest(car));
    };
    console.log(parametrSort);
    const renderModalCar = (id: number) => {
        setDriverId(id);
        setFormType(true);
        setModalActive(true);
    };

    return (
        <>
            <ul className={styles.listCars}>
                {cars
                    .sort((a: any, b: any): any => {
                        return parametrSort.isAsc
                            ? a[parametrSort.class] < b[parametrSort.class]
                            : a[parametrSort.class] > b[parametrSort.class];
                    })
                    .map(car => (
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
                                        className={`${styles.dropdown} ${
                                            styles[car.status.code]
                                        }`}
                                        onClick={() =>
                                            selectStatus(car.id.toString())
                                        }
                                        text={car.status.title}
                                        name={car.id.toString()}
                                    />
                                    <Statuses
                                        statuses={statuses}
                                        id={car.id.toString()}
                                        active={active}
                                        focusElement={focusElement}
                                        updateStatus={updateCarStatus}
                                        backDrop={activateBackDrop}
                                        activeBackDrop={activeBackDrop}
                                    />
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
                                        onClick={() =>
                                            showDeleteCarForm(car.id)
                                        }
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

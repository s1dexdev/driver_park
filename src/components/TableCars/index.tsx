import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CarForm, Modal } from '../';
import { Translate } from '../../lang';
import { carsSelector } from '../../redux/cars/selectors';
import { TableHeaderCars } from './TableHeaderCars';
import { ListCars } from './ListCars';
import styles from './TableCars.module.scss';

export function TableCars(): JSX.Element {
    const cars = useSelector(carsSelector);
    const { driverId } = useParams();
    const [formType, setFormType] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const renderModalCar = () => {
        setFormType(true);
        setModalActive(true);
    };

    return (
        <>
            <div className={styles.carTable}>
                <p className={styles.carTable__title}>{Translate('cars')}</p>
                <div className={styles.carTable__wrapper}>
                    <div className={styles.carTable__wrapperCars}>
                        <p className={styles.carTable__numberCars}>
                            {Translate('allCars')}
                            <span className={styles.carTable__numberCars_color}>
                                {' '}
                                ({cars.length})
                            </span>
                        </p>
                    </div>
                    <TableHeaderCars />
                    {cars.length ? (
                        <ListCars />
                    ) : (
                        <div className={styles.info}>
                            <p className={styles.info__text}>
                                {Translate('carNotFound')}
                            </p>
                            {driverId && (
                                <button
                                    type="button"
                                    className={styles.info__addBtn}
                                    onClick={() => renderModalCar()}
                                >
                                    {Translate('add')}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {formType && <CarForm id={Number(driverId)} />}
            </Modal>
        </>
    );
}

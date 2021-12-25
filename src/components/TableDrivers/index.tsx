import { useState } from 'react';
import { useSelector } from 'react-redux';
import { driversSelector } from '../../redux/drivers/selectors';
import { Button, Modal, DriverForm } from '../';
import { TableHeaderDrivers } from './TableHeaderDrivers';
import { ListDrivers } from './ListDrivers';
import styles from './TableDrivers.module.scss';

export function TableDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);
    const [modalActive, setModalActive] = useState(false);

    const renderModalDriver = () => {
        setModalActive(true);
        return true;
    };

    return (
        <div className={styles.driverTable}>
            <p className={styles.driverTable__title}>All drivers</p>
            <div className={styles.driverTable__wrapper}>
                <div className={styles.driverTable__wrapperDrivers}>
                    <p className={styles.driverTable__numberDrivers}>
                        {' '}
                        All drivers{' '}
                        <span
                            className={styles.driverTable__numberDrivers_color}
                        >
                            ({drivers.length})
                        </span>
                    </p>
                    <Button
                        onClick={renderModalDriver}
                        className={styles.button}
                        name={styles.button}
                        text={'Add driver'}
                    />
                </div>
                <TableHeaderDrivers />
                <ListDrivers />
                <Modal active={modalActive} setActive={setModalActive}>
                    <DriverForm />
                </Modal>
            </div>
        </div>
    );
}

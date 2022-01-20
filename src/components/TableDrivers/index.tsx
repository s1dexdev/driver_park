import { useState } from 'react';
import { useSelector } from 'react-redux';
import { driversSelector } from '../../redux/drivers/selectors';
import { Modal, DriverForm } from '../';
import { Translate } from '../../lang';
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
            <p className={styles.driverTable__title}>{Translate('drivers')}</p>
            <div className={styles.driverTable__wrapper}>
                <div className={styles.driverTable__wrapperDrivers}>
                    <p className={styles.driverTable__numberDrivers}>
                        {Translate('allDrivers')}
                        <span
                            className={styles.driverTable__numberDrivers_color}
                        >
                            {' '}
                            ({drivers.length})
                        </span>
                    </p>

                    <button
                        type="button"
                        className={styles.button}
                        onClick={renderModalDriver}
                    >
                        {Translate('addDriverBtn')}
                    </button>
                </div>
                <TableHeaderDrivers />
                {drivers.length ? (
                    <ListDrivers />
                ) : (
                    <p className={styles.driverTable__info}>
                        {Translate('driverNotFound')}
                    </p>
                )}
                <Modal active={modalActive} setActive={setModalActive}>
                    <DriverForm />
                </Modal>
            </div>
        </div>
    );
}

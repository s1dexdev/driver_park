import { useSelector } from 'react-redux';
import { driversSelector } from '../../redux/drivers/selectors';
import { TableHeaderDrivers } from './TableHeaderDrivers';
import { ListDrivers } from './ListDrivers';
import styles from './TableDrivers.module.scss';

export function TableDrivers(): JSX.Element {
    const drivers = useSelector(driversSelector);

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
                    <button className={styles.driverTable__addBtnDrivers}>
                        Add drivers
                    </button>
                </div>
                <TableHeaderDrivers />
                <ListDrivers />
            </div>
        </div>
    );
}

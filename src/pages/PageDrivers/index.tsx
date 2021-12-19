import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../components';
import DriversBlock from './DriversBlock';
import { navConfig } from '../../utils/constants';
import { fetchDriversRequest } from '../../redux/drivers/actions';
import { driversSelector } from '../../redux/drivers/selectors';
import { ReactComponent as Driver } from '../../images/driver.svg';
import { ReactComponent as SortDown } from '../../images/sortDown.svg';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';
import styles from './PageDrivers.module.scss';

export function PageDrivers(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDriversRequest());
    }, [dispatch]);

    const drivers = useSelector(driversSelector);

    return (
        <>
            <NavBar icon={Driver} text={navConfig.drivers.label} />
            <div className={styles.driversBlock}>
                <div className={styles.header_block}>
                    <div>All Clients</div>
                    <button>Add new client</button>
                </div>
                <div className={styles.driversTitle}>
                    <div className={styles.nuv_list}>
                        ID
                        <SortDown />
                    </div>
                    <div className={styles.nuv_list}>
                        Name/Surname
                        <SortDown />
                    </div>
                    <div className={styles.nuv_list}>
                        Registration
                        <SortDown />
                    </div>
                    <div className={styles.nuv_list}>
                        Date/Birth
                        <SortDown />
                    </div>
                    <div className={styles.nuv_list}>
                        Status
                        <BottomArrow />
                    </div>
                    <div className={styles.nuv_list}>Action</div>
                </div>

                <DriversBlock drivers={drivers} />
            </div>
        </>
    );
}

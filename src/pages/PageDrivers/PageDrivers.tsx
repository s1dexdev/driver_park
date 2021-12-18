import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDriversRequest } from '../../redux/drivers/actions';
import { driversSelector } from '../../redux/drivers/selectors';
import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import { navConfig } from '../../utils/constants';
import styles from './PageDrivers.module.scss';
import { ReactComponent as SortDown } from './sortDown.svg';
import DriversBlock from './DriversBlock';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';

function PageDrivers(): JSX.Element {
    const dispatch = useDispatch();
    const drivers = useSelector(driversSelector);

    useEffect(() => {
        dispatch(fetchDriversRequest());
    }, [dispatch]);

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

export default PageDrivers;

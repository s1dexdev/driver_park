import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageDrivers.module.scss';
import { ReactComponent as SortDown } from './sortDown.svg';
import DriversBlock from './DriversBlock';
import DriversArr from './Drivers';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';

function PageDrivers(): JSX.Element {
    const { drivers } = navConfig;

    return (
        <>
            <NavBar icon={Driver} text={drivers.label} />
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
                <DriversBlock drivers={DriversArr} />
            </div>
        </>
    );
}

export default PageDrivers;

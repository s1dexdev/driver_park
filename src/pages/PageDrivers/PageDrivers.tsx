import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageDrivers.module.scss';
import { ReactComponent as SortDown } from './sortDown.svg';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';
import DriversBlock from './DriversBlock';
import DriversArr from './Drivers';

function PageDrivers(): JSX.Element {
    const { drivers } = navConfig;

    return (
        <>
            <NavBar icon={Driver} text={drivers.label} />
            <div className={styles.driversBlock}>
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
                        {/*<select name="status" className={styles.list_status}>
                            <option selected>Status</option>
                            <option>Активный</option>
                            <option>Заблокированный</option>
                            <option>Не активный</option>
                        </select>*/}
                    </div>
                    <div className={styles.nuv_list}>Action</div>
                </div>
                <DriversBlock drivers={DriversArr} />
            </div>
        </>
    );
}

export default PageDrivers;

import { FunctionComponent, SVGProps } from 'react';
import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import { ReactComponent as SortDown } from '../../images/sortDown.svg';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageDrivers.module.scss';

type TIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

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
                <div className={styles.driversPage}>
                    <div>1</div>
                    <div>Fedya Juk</div>
                    <div>12.05.2021</div>
                    <div>12.05.2021</div>
                    <div>active</div>
                    <div>Action</div>
                </div>
            </div>
        </>
    );
}

export default PageDrivers;

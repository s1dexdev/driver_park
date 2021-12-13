import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageDrivers.module.scss';

function PageDrivers() {
    const { drivers } = navConfig;

    return (
        <>
            <NavBar icon={Driver} text={drivers.label} />
            <h1 className={styles.driversPage}>Drivers Page</h1>
        </>
    );
}

export default PageDrivers;

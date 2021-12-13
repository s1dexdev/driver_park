import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import styles from './PageDrivers.module.scss';

function PageDrivers() {
    return (
        <>
            <NavBar icon={Driver} text="Drivers" />
            <h1 className={styles.driversPage}>Drivers Page</h1>
        </>
    );
}

export default PageDrivers;

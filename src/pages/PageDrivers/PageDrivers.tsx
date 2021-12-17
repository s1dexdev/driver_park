import { useDispatch, useSelector } from 'react-redux';
import {
    FETCH_DRIVERS_REQUEST,
    fetchDriversRequest,
} from '../../redux/drivers/actions';
import { driversSelector } from '../../redux/drivers/selectors';
import NavBar from '../../components/NavBar';
import { ReactComponent as Driver } from '../../images/driver.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageDrivers.module.scss';

function PageDrivers(): JSX.Element {
    const { drivers } = navConfig;

    const dispatch = useDispatch();
    const items = useSelector(driversSelector);

    return (
        <>
            <NavBar icon={Driver} text={drivers.label} />
            <h1 className={styles.driversPage}>Drivers Page</h1>
            <button onClick={() => dispatch(fetchDriversRequest())}>
                drivers
            </button>
        </>
    );
}

export default PageDrivers;

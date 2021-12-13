import NavBar from '../../components/NavBar';
import { ReactComponent as Car } from '../../images/car.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './PageCars.module.scss';

function PageCars() {
    const { cars } = navConfig;

    return (
        <>
            <NavBar icon={Car} text={cars.label} />
            <h1 className={styles.carsPage}>Cars Page</h1>
        </>
    );
}

export default PageCars;

import NavBar from '../../components/NavBar';
import { ReactComponent as Car } from '../../images/car.svg';
import styles from './PageCars.module.scss';

function PageCars() {
    return (
        <>
            <NavBar icon={Car} text="Cars" />
            <h1 className={styles.carsPage}>Cars Page</h1>
        </>
    );
}

export default PageCars;

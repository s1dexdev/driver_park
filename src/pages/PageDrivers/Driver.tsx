import styles from './PageDrivers.module.scss';
import { ReactComponent as Delete } from './delete.svg';

function Driver({ driver }: any): JSX.Element {
    return (
        <>
            <div className={styles.driversPage}>
                <div>{driver.id}</div>
                <div>{driver.name_surname}</div>
                <div>{driver.registration}</div>
                <div>{driver.date_birth}</div>
                <div>{driver.status}</div>
                <div>
                    <Delete />
                </div>
            </div>
        </>
    );
}

export default Driver;

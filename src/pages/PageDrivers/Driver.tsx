import styles from './PageDrivers.module.scss';
import { ReactComponent as Delete } from './delete.svg';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';

function Driver({ driver }: any): JSX.Element {
    return (
        <>
            <div className={styles.driversPage}>
                <div>{driver.id}</div>
                <div>{driver.name_surname}</div>
                <div>{driver.registration}</div>
                <div>{driver.date_birth}</div>
                <div>
                    <div className={styles.dropDown}>
                        <div className={styles.dropBtn}>
                            {driver.status}
                            <BottomArrow />
                        </div>
                        <div className={styles.dropDown_content}>
                            <p>Active</p>
                            <p>Not active</p>
                            <p>Locked</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Delete />
                </div>
            </div>
        </>
    );
}

export default Driver;

import { parseDate } from '../../helpers';
import { ReactComponent as Delete } from '../../images/delete.svg';
import { ReactComponent as BottomArrow } from '../../images/bottomArrow.svg';
import styles from './PageDrivers.module.scss';

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: {
        title: string;
        code: string;
    };
}

function Driver({ driver }: { driver: IDriver }): JSX.Element {
    return (
        <>
            <div className={styles.driversPage}>
                <div>{driver.id}</div>
                <div>{`${driver.first_name} ${driver.last_name}`}</div>
                <div>{parseDate(driver.date_created)}</div>
                <div>{parseDate(driver.date_birth)}</div>
                <div>
                    <div className={styles.dropDown}>
                        <div className={styles.dropBtn}>
                            {driver.status.title}
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

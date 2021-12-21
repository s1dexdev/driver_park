import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import styles from './TableHeaderDrivers.module.scss';

export function TableHeaderDrivers(): JSX.Element {
    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            <li
                key={'id'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__id}`}
            >
                ID
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'name'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__name}`}
            >
                NAME
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'regDate'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__regDate}`}
            >
                REGISTRATION DATE
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'birthDate'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__birthDate}`}
            >
                BIRTH DATE
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'status'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__status}`}
            >
                STATUS
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li key={'actions'} className={styles.tableHeader__item}>
                ACTIONS
            </li>
        </ul>
    );
}

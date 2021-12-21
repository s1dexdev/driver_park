import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import styles from './TableHeaderCars.module.scss';

export function TableHeaderCars(): JSX.Element {
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
                key={'mark'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__mark}`}
            >
                MARK
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'model'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__model}`}
            >
                MODEL
                <SortDown className={styles.tableHeader__icon} />
            </li>

            <li
                key={'number'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__number}`}
            >
                NUMBER
                <SortDown className={styles.tableHeader__icon} />
            </li>
            <li
                key={'year'}
                className={`${styles.tableHeader__item} ${styles.tableHeader__year}`}
            >
                FIRST REGISTRATION
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

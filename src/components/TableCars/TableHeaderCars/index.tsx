import { carsConfig } from '../../../utils/constants';
import { concatClasses } from '../../../helpers';
import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import styles from './TableHeaderCars.module.scss';

export function TableHeaderCars(): JSX.Element {
    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {carsConfig.map(({ title, classes }) => (
                <li key={title} className={concatClasses(styles, classes)}>
                    {title}
                    {title !== 'ACTIONS' && (
                        <SortDown className={styles.tableHeader__icon} />
                    )}
                </li>
            ))}
        </ul>
    );
}

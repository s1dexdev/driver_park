import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { Translate } from '../../../lang';
import { concatClasses } from '../../../helpers';
import { driversConfig } from '../../../utils/constants';
import styles from './TableHeaderDrivers.module.scss';

export function TableHeaderDrivers(): JSX.Element {
    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {driversConfig.map(
                ({ title, classes }: { title: string; classes: string[] }) => (
                    <li key={title} className={concatClasses(styles, classes)}>
                        {Translate(title)}
                        {title !== 'actions' && (
                            <SortDown className={styles.tableHeader__icon} />
                        )}
                    </li>
                ),
            )}
        </ul>
    );
}

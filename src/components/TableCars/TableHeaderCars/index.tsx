import { useState } from 'react';
import { carsConfig } from '../../../utils/constants';
import { concatClasses } from '../../../helpers';
import { Translate } from '../../../lang';
import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../images/sortUp.svg';
import styles from './TableHeaderCars.module.scss';

export function TableHeaderCars(): JSX.Element {
    const [sortData, setSortData] = useState(true);

    const choiseSort = () => {
        setSortData(!sortData);
    };
    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {carsConfig.map(({ title, classes }) => (
                <li key={title} className={concatClasses(styles, classes)}>
                    {Translate(title)}
                    {title !== 'actions' &&
                        (sortData ? (
                            <SortDown
                                className={styles.tableHeader__icon}
                                onClick={choiseSort}
                            />
                        ) : (
                            <SortUp
                                className={styles.tableHeader__icon}
                                onClick={choiseSort}
                            />
                        ))}
                </li>
            ))}
        </ul>
    );
}

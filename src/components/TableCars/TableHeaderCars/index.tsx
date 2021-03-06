import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortItemsCar } from '../../../redux/cars/actions';
import { headerConfig } from './headerConfig';
import { concatClasses } from '../../../utils/helpers';
import { Translate } from '../../../lang';
import { ReactComponent as SortDown } from '../../../assets/images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../assets/images/sortUp.svg';
import styles from './TableHeaderCars.module.scss';
import { Car } from '../../../interfaces';

export function TableHeaderCars(): JSX.Element {
    const dispatch = useDispatch();
    const [sortField, setSortField] = useState('');
    const [sortIcon, setSortIcon] = useState(false);

    const handleClick = (name: string) => {
        setSortField(name);
        setSortIcon(!sortIcon);
    };

    useEffect(() => {
        const compare = (a: string, b: string) => {
            if ((sortIcon && a > b) || (!sortIcon && a < b)) {
                return -1;
            }
            if ((sortIcon && a < b) || (!sortIcon && a > b)) {
                return 1;
            }
            return 0;
        };

        const sortItemsByField = (firstCar: Car, secondCar: Car) => {
            const param = sortField as string & number;

            if (sortField === 'status') {
                return compare(firstCar.status.code, secondCar.status.code);
            }

            return compare(firstCar[param], secondCar[param]);
        };

        dispatch(sortItemsCar(sortItemsByField));
    }, [dispatch, sortField, sortIcon]);

    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {headerConfig.map(({ title, classes, name }) => (
                <li key={title} className={concatClasses(styles, classes)}>
                    {Translate(title)}
                    {title !== 'actions' && (
                        <button
                            type="button"
                            className={name}
                            onClick={() => handleClick(name)}
                        >
                            {sortIcon && sortField === name ? (
                                <SortDown />
                            ) : (
                                <SortUp />
                            )}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
}

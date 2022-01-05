import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../';
import { sortItems } from '../../../redux/cars/actions';
import { carsConfig } from '../../../utils/constants';
import { concatClasses } from '../../../helpers';
import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../images/sortUp.svg';
import styles from './TableHeaderCars.module.scss';

interface IStatus {
    title: string;
    code: string;
}
interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: IStatus;
}

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

        const sortItemsByField = (firstCar: ICar, secondCar: ICar) => {
            const param = sortField as string & number;

            if (sortField === 'status') {
                return compare(firstCar.status.code, secondCar.status.code);
            }

            return compare(firstCar[param], secondCar[param]);
        };

        dispatch(sortItems(sortItemsByField));
    }, [dispatch, sortField, sortIcon]);

    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {carsConfig.map(({ title, classes, name }) => (
                <li key={title} className={concatClasses(styles, classes)}>
                    {title}
                    {title !== 'actions' && (
                        <Button
                            className={name}
                            onClick={() => handleClick(name)}
                            img={
                                sortIcon && sortField === name ? (
                                    <SortDown />
                                ) : (
                                    <SortUp />
                                )
                            }
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

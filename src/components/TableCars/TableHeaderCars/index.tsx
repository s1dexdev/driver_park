import { carsConfig } from '../../../utils/constants';
import { concatClasses } from '../../../helpers';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../images/sortUp.svg';
import { Button } from '../../Button/index';
import { choiseParameterSort } from '../../../redux/cars/actions';
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

interface ISort {
    sortFunction: (a: ICar, b: ICar) => number;
}

export function TableHeaderCars(): JSX.Element {
    const dispatch = useDispatch();
    const [sortField, setSortField] = useState('');
    const [sortIcon, setSortIcon] = useState(false);

    // console.log('data: ', sortData);

    const sorting = (a: string, b: string) => {
        if ((sortIcon && a > b) || (!sortIcon && a < b)) {
            return -1;
        }
        if ((sortIcon && a < b) || (!sortIcon && a > b)) {
            return 1;
        }
        return 0;
    };

    const sortFunction = (firstCar: ICar, secondCar: ICar) => {
        // console.log('sort data: ', sortData);
        if (sortField === 'status') {
            // console.log('code: ', firstCar.status.code);

            return sorting(firstCar.status.code, secondCar.status.code);
        }

        const param = sortField as string & number;
        // console.log('class: ', firstCar[param]);

        return sorting(firstCar[param], secondCar[param]);
    };

    const choiseSort = (name: string) => {
        setSortField(name);
        setSortIcon(!sortIcon);

        dispatch(choiseParameterSort(sortFunction));
    };

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
                            onClick={() => choiseSort(name)}
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

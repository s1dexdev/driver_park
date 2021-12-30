import { carsConfig } from '../../../utils/constants';
import { concatClasses } from '../../../helpers';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../images/sortUp.svg';
import { choiseParameterSort } from '../../../redux/cars/actions';

import styles from './TableHeaderCars.module.scss';
import { Button } from '../../Button/index';

export function TableHeaderCars(): JSX.Element {
    const [sortData, setSortData] = useState({ class: '', isAsc: true });
    const dispatch = useDispatch();

    const choiseSort = (name: string) => {
        const obj = {
            class: name,
            isAsc: !sortData.isAsc,
        };
        setSortData(obj);
        dispatch(choiseParameterSort(obj));
    };
    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {carsConfig.map(({ title, classes, name }) => (
                <li key={title} className={concatClasses(styles, classes)}>
                    {title}
                    {title !== 'ACTIONS' && (
                        <Button
                            className={name}
                            onClick={() => choiseSort(name)}
                            img={
                                sortData.isAsc && sortData.class === name ? (
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

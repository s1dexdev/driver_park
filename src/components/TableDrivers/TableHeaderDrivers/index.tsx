import { ReactComponent as SortDown } from '../../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../../images/sortUp.svg';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { sortItemsDriver } from '../../../redux/drivers/actions';
import { Translate } from '../../../lang';
import { concatClasses } from '../../../helpers';
import { driversConfig } from '../../../utils/constants';
import styles from './TableHeaderDrivers.module.scss';
import { Button } from '../..';

interface IStatus {
    title: string;
    code: string;
}

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: IStatus;
}

export function TableHeaderDrivers(): JSX.Element {
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

        const sortItemsByField = (firstCar: IDriver, secondCar: IDriver) => {
            const param = sortField as string & number;

            if (sortField === 'status') {
                return compare(firstCar.status.code, secondCar.status.code);
            }

            return compare(firstCar[param], secondCar[param]);
        };

        dispatch(sortItemsDriver(sortItemsByField));
    }, [dispatch, sortField, sortIcon]);

    return (
        <ul className={styles.tableHeader}>
            <li key={'checkbox'} className={`${styles.tableHeader__item}`}>
                <input type="checkbox" />
            </li>
            {driversConfig.map(
                ({
                    title,
                    classes,
                    name,
                }: {
                    title: string;
                    classes: string[];
                    name: string;
                }) => (
                    <li key={title} className={concatClasses(styles, classes)}>
                        {Translate(title)}
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
                ),
            )}
        </ul>
    );
}

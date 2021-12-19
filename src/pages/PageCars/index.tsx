import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, NavBar, Button } from '../../components';
import { fetchCarsRequest } from '../../redux/cars/actions';
import { carsSelector } from '../../redux/cars/selectors';
import { ReactComponent as Car } from '../../images/car.svg';
import { ReactComponent as Delete } from '../../images/delete.svg';
import { ReactComponent as SortDown } from '../../images/sortDown.svg';
import { ReactComponent as SortUp } from '../../images/sortUp.svg';
import { navConfig } from '../../utils/constants';
import { tableCarsColumns } from '../../utils/constants/index';
import styles from './PageCars.module.scss';

export function PageCars(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCarsRequest());
    }, [dispatch]);

    const cars = useSelector(carsSelector);

    const sortImageDown = <SortDown />;
    const sortImageUp = <SortUp />;
    const removeCar = <Delete />;

    const [sortedData, setData] = useState(false);
    const [addForm, setFormNewCar] = useState(false);

    const addNewCar = () => {
        setFormNewCar(true);
        console.log(1);
        return true;
    };
    const choiseSortData = () => {
        setData(!sortedData);
        console.log(2);
        return true;
    };

    const deleteCar = () => {
        console.log(3);
        return true;
    };

    return (
        <>
            <NavBar icon={Car} text={navConfig.cars.label} />
            <Container>
                <div className={styles.blockTableCars}>
                    <Button
                        className={styles.addCars}
                        onClick={addNewCar}
                        text="add cars"
                    />
                    <div className={styles.headlines}>
                        {tableCarsColumns.map(item => (
                            <div key={item}>
                                {item}
                                <Button
                                    className={styles.sort}
                                    onClick={choiseSortData}
                                    name={item}
                                    img={
                                        sortedData ? sortImageUp : sortImageDown
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    {cars.map(item => (
                        <div className={styles.blockInfo} key={item.id}>
                            <div>{item.id}</div>
                            {/* <div>{item.FIO}</div> */}
                            <div>{}</div>
                            <div>{item.mark}</div>
                            <div>{item.model}</div>
                            <div>{item.number}</div>
                            <div>{item.year}</div>
                            <div>{item.status.title}</div>
                            <Button
                                className={styles.delete}
                                name={item.id.toString()}
                                onClick={deleteCar}
                                img={removeCar}
                            />
                        </div>
                    ))}
                    <div className={styles.footer}></div>
                </div>
            </Container>
        </>
    );
}

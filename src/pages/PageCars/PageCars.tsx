import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsRequest } from '../../redux/cars/actions';
import { carsSelector } from '../../redux/cars/selectors';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import { ReactComponent as Car } from '../../images/car.svg';
import { ReactComponent as Delete } from './delete.svg';
import { ReactComponent as SortDown } from './sortDown.svg';
import { ReactComponent as SortUp } from './sortUp.svg';
import { navConfig } from '../../utils/constants';
import {
    tableCarsColumns,
    statusCars,
    infoCars,
} from '../../utils/constants/index';
import styles from './PageCars.module.scss';
import { Button } from '../../components/Button/Button';

function PageCars(): JSX.Element {
    const dispatch = useDispatch();
    const cars: any = useSelector(carsSelector);

    const sortImageDown = <SortDown />;
    const sortImageUp = <SortUp />;
    const removeCar = <Delete />;

    const [sortedData, setData] = useState(false);
    const [addForm, setFormNewCar] = useState(false);

    useEffect(() => {
        dispatch(fetchCarsRequest());
    }, [dispatch]);

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
            {/* <h1 className={styles.carsPage}>Cars Page</h1> */}
            <Container>
                <div className={styles.blockTableCars}>
                    <Button
                        className={styles.addCars}
                        onClick={addNewCar}
                        text="add cars"
                    />
                    <div className={styles.headlines}>
                        {tableCarsColumns.map(item => {
                            return (
                                <div key={'key_' + item}>
                                    {item}
                                    <Button
                                        className={styles.sort}
                                        onClick={choiseSortData}
                                        name={item}
                                        img={
                                            sortedData
                                                ? sortImageUp
                                                : sortImageDown
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {cars.map((item: any) => {
                        return (
                            <div
                                className={styles.blockInfo}
                                key={'id_' + item.id}
                            >
                                <div>{item.id}</div>
                                {/* <div>{item.FIO}</div> */}
                                <div>{item.model}</div>
                                <div>{item.mark}</div>
                                <div>{item.model}</div>
                                <div>{item.number}</div>
                                <div>{item.year}</div>
                                <div>{item.status.title}</div>
                                <Button
                                    className={styles.delete}
                                    name={item.id}
                                    onClick={deleteCar}
                                    img={removeCar}
                                />
                            </div>
                        );
                    })}
                    <div className={styles.footer}></div>
                </div>
            </Container>
        </>
    );
}

export default PageCars;

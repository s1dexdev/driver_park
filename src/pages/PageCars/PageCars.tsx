import NavBar from '../../components/NavBar';
import { ReactComponent as Car } from '../../images/car.svg';
import navConfig from '../../utils/constants/navConfig';
import { tableCarsColumns, statusCars } from '../../utils/constants/index';
import styles from './PageCars.module.scss';
import React from 'react';

function PageCars(): JSX.Element {
    const { cars } = navConfig;

    return (
        <>
            <NavBar icon={Car} text={cars.label} />
            {/* <h1 className={styles.carsPage}>Cars Page</h1> */}

            <div className={styles.blockCars}>
                {tableCarsColumns.map(item => {
                    if (item !== 'Standard') {
                        <div key={item}>{item}</div>;
                    } else {
                        <>
                            <input list="cars" />
                            <datalist id="cars">
                                {statusCars.map(data => {
                                    <option>{data}</option>;
                                })}
                            </datalist>
                        </>;
                    }
                })}
            </div>
        </>
    );
}

export default PageCars;

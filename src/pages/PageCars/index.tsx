import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, NavBar, TableCars } from '../../components';
import { navConfig } from '../../utils/constants';
import { fetchCarsRequest } from '../../redux/cars/actions';
import { ReactComponent as Car } from '../../images/car.svg';

export function PageCars(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCarsRequest());
    }, [dispatch]);

    return (
        <>
            <NavBar icon={Car} text={navConfig.cars.label} />
            <Container>
                <TableCars />
            </Container>
        </>
    );
}

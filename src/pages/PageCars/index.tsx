import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, NavBar, TableCars, Spinner } from '../../components';
import { navConfig } from '../../utils/constants';
import {
    fetchCarsRequest,
    fetchCarStatusesRequest,
} from '../../redux/cars/actions';
import { loadingSelector } from '../../redux/cars/selectors';
import { ReactComponent as Car } from '../../images/car.svg';

export function PageCars(): JSX.Element {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    useEffect(() => {
        dispatch(fetchCarStatusesRequest());
        dispatch(fetchCarsRequest());
    }, [dispatch]);

    return (
        <>
            <NavBar icon={Car} text={navConfig.cars.label} />
            <Container>{isLoading ? <Spinner /> : <TableCars />}</Container>
        </>
    );
}

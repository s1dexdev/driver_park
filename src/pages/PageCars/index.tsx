import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    const { driverId } = useParams();

    useEffect(() => {
        dispatch(fetchCarStatusesRequest());

        if (driverId) {
            dispatch(fetchCarsRequest(driverId));
        } else {
            dispatch(fetchCarsRequest());
        }
    }, [dispatch, driverId]);

    return (
        <>
            <NavBar icon={Car} text={navConfig.cars.label} />
            <Container>{isLoading ? <Spinner /> : <TableCars />}</Container>
        </>
    );
}

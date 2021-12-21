import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, NavBar, TableDrivers } from '../../components';
import { navConfig } from '../../utils/constants';
import { fetchDriversRequest } from '../../redux/drivers/actions';
import { ReactComponent as Driver } from '../../images/driver.svg';

export function PageDrivers(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDriversRequest());
    }, [dispatch]);

    return (
        <>
            <NavBar icon={Driver} text={navConfig.drivers.label} />
            <Container>
                <TableDrivers />
            </Container>
        </>
    );
}

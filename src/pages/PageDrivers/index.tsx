import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, NavBar, TableDrivers, Spinner } from '../../components';
import { navConfig } from '../../utils/constants';
import {
    fetchDriversRequest,
    fetchDriverStatusesRequest,
} from '../../redux/drivers/actions';
import { loadingSelector } from '../../redux/drivers/selectors';
import { ReactComponent as Driver } from '../../images/driver.svg';

function PageDrivers(): JSX.Element {
    const dispatch = useDispatch();
    const isLoading = useSelector(loadingSelector);

    useEffect(() => {
        dispatch(fetchDriversRequest());
        dispatch(fetchDriverStatusesRequest());
    }, [dispatch]);

    return (
        <>
            <NavBar icon={Driver} text={navConfig.drivers.label} />
            <Container>{isLoading ? <Spinner /> : <TableDrivers />}</Container>
        </>
    );
}

export default PageDrivers;

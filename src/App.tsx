import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Spinner } from './components';
import { navConfig } from './utils/constants';
import { setLocale } from './redux/locale/actions';
import { langSelector } from './redux/locale/selectors';
import { I18nProvider } from './lang';

const PageHome = lazy(() => import('./pages/HomePage'));
const PageDrivers = lazy(() => import('./pages/DriversPage'));
const PageCars = lazy(() => import('./pages/CarsPage'));

function App(): JSX.Element {
    const dispatch = useDispatch();
    const locale = useSelector(langSelector);
    const { home, drivers, driverCars, cars } = navConfig;

    useEffect(() => {
        const lang = localStorage.getItem('locale');

        if (lang) {
            dispatch(setLocale(lang));
        }
    }, [dispatch]);

    return (
        <I18nProvider locale={locale}>
            <Header />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path={home.path} element={<PageHome />} />
                    <Route path={drivers.path} element={<PageDrivers />} />
                    <Route path={driverCars.path} element={<PageCars />} />
                    <Route path={cars.path} element={<PageCars />} />
                </Routes>
            </Suspense>
        </I18nProvider>
    );
}

export default App;

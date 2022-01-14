import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Header, Spinner } from './components';
import { navConfig } from './utils/constants';
import { I18nProvider, LOCALES } from './lang';

const PageHome = lazy(() => import('./pages/HomePage'));
const PageDrivers = lazy(() => import('./pages/DriversPage'));
const PageCars = lazy(() => import('./pages/CarsPage'));

function App(): JSX.Element {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);
    const { home, drivers, driverCars, cars } = navConfig;

    useEffect(() => {
        const lang = localStorage.getItem('locale');

        if (lang) {
            setLocale(lang);
        }
    }, []);

    const changeLanguage = (language: string) => {
        setLocale(language);
        localStorage.setItem('locale', language);
    };

    return (
        <I18nProvider locale={locale}>
            <Provider store={store}>
                <Header onChangeLanguage={changeLanguage} />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path={home.path} element={<PageHome />} />
                        <Route path={drivers.path} element={<PageDrivers />} />
                        <Route path={driverCars.path} element={<PageCars />} />
                        <Route path={cars.path} element={<PageCars />} />
                    </Routes>
                </Suspense>
            </Provider>
        </I18nProvider>
    );
}

export default App;

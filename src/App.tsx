import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { Header } from './components';
import { PageHome, PageDrivers, PageCars } from './pages';
import { navConfig } from './utils/constants';

const { store } = createStore();

function App(): JSX.Element {
    const { home, drivers, cars } = navConfig;

    return (
        <Provider store={store}>
            <Header />
            <Routes>
                <Route path={home.path} element={<PageHome />} />
                <Route path={drivers.path} element={<PageDrivers />} />
                <Route path={cars.path} element={<PageCars />} />
            </Routes>
        </Provider>
    );
}

export default App;

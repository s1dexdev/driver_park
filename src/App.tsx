import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import PageHome from './pages/PageHome';
import PageDrivers from './pages/PageDrivers';
import PageCars from './pages/PageCars';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/drivers" element={<PageDrivers />} />
                <Route path="/cars" element={<PageCars />} />
            </Routes>
        </>
    );
}

export default App;

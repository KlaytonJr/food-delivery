import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Main from '../pages/Main';
import Checkout from '../pages/Checkout';

function Router() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    );
}

export default Router;

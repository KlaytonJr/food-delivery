import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/menu/:filter?" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </>
    );
}

export default Router;

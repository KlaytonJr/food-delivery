import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import CartProvider from './context/CartProvider';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;

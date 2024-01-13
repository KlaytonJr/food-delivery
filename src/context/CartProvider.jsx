import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Função para pegar item no cart
  function getFromCart(id) {
    return cart.find(obj => obj.id === id);
  }

  // Função para adicionar item do cart
  function addToCart(item) {
    if (isInCart(item.id)) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(obj => 
          obj.id === item.id ? { ...obj, quantity: obj.quantity + item.quantity } : obj
        );
        return updatedCart;
      });

      console.log(cart);
      
    } else {
      setCart([...cart, item]);
    }
  }

  // Função para remover item do cart
  function removeFromCart(itemId) {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  }

  // Função para checar se tem item no cart
  function isInCart(itemId) {
    return cart.some(item => item.id === itemId);
  }

  // Função pegar quantidade dos item no cart
  function cartQtd() {
    let quantity = 0;

    cart.forEach((item) => {
      quantity += item.quantity;
    });
    
    return quantity;
  }

  // O que dá para adicionar ?
  // - Salvar no localStorage ou Cache
  // - Pegar do localStorage ou Cache
  // - Pegar quantidade de itens no cart
  // - Excluir todos os items -> setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, cartQtd }}>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
  }

  return context;
}
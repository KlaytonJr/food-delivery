import React from 'react'
import { Link } from 'react-router-dom';
import { CartRegular } from '@fluentui/react-icons';
import { useCart } from '../../../context/CartProvider';


function CartIcon() {
    const { cartQtd } = useCart();

  return (
    <Link to={`/checkout`} className='relative'>
        <span className='absolute top-[-5px] right-[-5px] text-xs bg-red-600 rounded-full h-4 w-4 text-center text-white'>{ cartQtd() }</span>
        <CartRegular className='w-8 h-8' />
    </Link>
  )
}

export default CartIcon
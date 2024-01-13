import React, { useState } from 'react'
import { Person28Regular } from '@fluentui/react-icons';
import Navbar from '../Navbar'
import Button from '../Button'
import CartIcon from './CartIcon';
import ModalAuth from '../ModalAuth';

function Header() {
    const [showAuthModal, setShowAuthModal] = useState(false);
  return (
    <>
        { showAuthModal && <ModalAuth showModal={setShowAuthModal} /> }

        <div className='flex justify-between items-center px-12 py-5 rounded-b-lg bg-white'>
            <Navbar />
            <h3 className='text-2xl font-bold'>Food Express</h3>
            <div className='flex gap-5 items-center'>
                <Button 
                    className="bg-amber-400 rounded px-3 py-2 text-slate-800 font-semibold text-sm cursor-pointer hover:bg-amber-500"
                    onClick={() => setShowAuthModal(!showAuthModal)} 
                >
                    <span className='mr-2'>Login / Registre-se</span>
                    <Person28Regular />
                </Button>
                <CartIcon />
            </div>
        </div>
    </>
  )
}

export default Header
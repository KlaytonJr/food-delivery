import React, { useState } from 'react'
import Button from '../Button'
import { FireFilled } from '@fluentui/react-icons';
import { useCart } from '../../context/CartProvider';

function ItemCard({ item }) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(0);

    function submit() {
        addToCart({
            ...item,
            quantity
        })
    }

  return (
    <div className='relative w-64 bg-white p-4 rounded-lg flex flex-col justify-between'>

        {/* new Icon */}
        {
            item.new && (
                <span className='absolute top-5 left-5 bg-blue-400 rounded-md px-2 h-5'>
                    <p className='font-semibold text-white text-xs'>Lançamento</p>
                </span>
            )
        }

        {/* promotion Icon */}
        {
            item.promotion && (
                <span className='absolute top-[-10px] right-[-10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <path d="M12.7867 3.0119C13.4399 0.120208 17.5601 0.120209 18.2133 3.0119C18.6366 4.88602 20.7873 5.77684 22.4118 4.75099C24.9184 3.16812 27.8319 6.08156 26.249 8.58818C25.2232 10.2127 26.114 12.3634 27.9881 12.7867C30.8798 13.4399 30.8798 17.5601 27.9881 18.2133C26.114 18.6366 25.2232 20.7873 26.249 22.4118C27.8319 24.9184 24.9184 27.8319 22.4118 26.249C20.7873 25.2232 18.6366 26.114 18.2133 27.9881C17.5601 30.8798 13.4399 30.8798 12.7867 27.9881C12.3634 26.114 10.2127 25.2232 8.58818 26.249C6.08157 27.8319 3.16812 24.9184 4.75099 22.4118C5.77684 20.7873 4.88601 18.6366 3.0119 18.2133C0.120208 17.5601 0.120209 13.4399 3.0119 12.7867C4.88602 12.3634 5.77684 10.2127 4.75099 8.58818C3.16812 6.08157 6.08156 3.16812 8.58818 4.75099C10.2127 5.77684 12.3634 4.88601 12.7867 3.0119Z" fill="#FFC303"/>
                    </svg>
                    <FireFilled className="absolute top-2 right-2 text-white" />
                </span>
            )
        }

        <img className='h-36 w-full object-cover rounded' src={item.imageUrl} alt=''></img>

        <h1 className='text-md text-slate-700 font-semibold mt-2'>{ item.name }</h1>
        <p className='text-xs text-slate-600'>{ item.description }</p>

        <div className='flex justify-between items-center mt-5'>
            {
                item.numOfEaters > 1 ?
                (
                    <p className='text-xs text-slate-600 font-medium'>Serve { item.numOfEaters } até pessoas</p>
                ) : (
                    <p className='text-xs text-slate-600 font-medium'>Serve para uma pessoa</p>
                )
            }

            <div className='flex flex-col items-end'>
                <p className={ item.priceWithDiscount ? 'line-through text-sm text-slate-600 font-medium' : 'text-lg text-slate-600 font-medium'}>{ 
                    item.price?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }) 
                }</p>
                <p className={ item.priceWithDiscount ? 'text-green-500 text-lg font-medium' : ''}>{ 
                    item.priceWithDiscount?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                }</p>
            </div>
        </div>

        {/* Actions */}
        <div className='flex justify-between mt-4'>
            {/* Quantity */}
            <div className='flex gap-2 items-center'>
                <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className='border-2 border-amber-400 rounded w-5 h-5'><p className='relative top-[-5px] text-amber-400'>-</p></button>
                <p>{ quantity }</p>
                <button onClick={() => quantity < item.quantityAvaiable && setQuantity(quantity + 1)} className='border-2 border-amber-400 rounded w-5 h-5'><p className='relative top-[-5px] text-amber-400'>+</p></button>
            </div>

            <Button 
                className="bg-amber-400 rounded px-3 py-1 text-slate-800 font-semibold text-xs cursor-pointer hover:bg-amber-500"
                onClick={submit}
            >
                <p>Adicionar +</p>
            </Button>
        </div>
    </div>
  )
}

export default ItemCard
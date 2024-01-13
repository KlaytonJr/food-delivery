import { Star28Filled, CheckmarkStarburst24Filled } from '@fluentui/react-icons'
import React, { useState } from 'react'

function RestaurantCard() {
    const [showInfo, setShowInfo] = useState(false);

  return (
    <>
        <div className='flex justify-between items-center pl-5 bg-white'>
            <div className='flex'>
                <div className='relative'>
                    <img
                        src='https://images.pexels.com/photos/3633990/pexels-photo-3633990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='h-20 w-20 rounded-full object-cover object-center'
                    ></img>

                    {/* Verified Icon */}
                    <span className='absolute w-4 h-4 top-1 right-1 bg-white'></span>
                    <CheckmarkStarburst24Filled className="absolute w-7 h-7 top-[-2px] right-[-2px] text-white" />
                    <CheckmarkStarburst24Filled className="absolute top-0 right-0 text-blue-500" />
                </div>
                
                <div className='ml-5 flex flex-col justify-center'>
                    <div className='flex gap-4'>
                        <h1 className='font-bold text-xl text-slate-700'>A Cantina Italiana</h1>
                        <span className='flex gap-1 text-center text-slate-700'>
                            <Star28Filled className='text-amber-400' />
                            4.72
                        </span>
                        <span className='text-green-500'>
                            $$$$
                        </span>
                    </div>
                    <p className='cursor-pointer text-slate-400 mt-2' onClick={() => setShowInfo(!showInfo)}>{ showInfo ? "Fechar" : "Ver mais" }</p>
                </div>

            </div>

            <img 
                src='https://images.pexels.com/photos/3633990/pexels-photo-3633990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='h-36 w-80 object-cover object-center'
            ></img>
        </div>
        { showInfo && (
            <div className='flex flex-col justify-between items-center pl-5 bg-white'>
                <p className='cursor-pointer text-slate-400 mt-2'>Ver mais</p>
                <p className='cursor-pointer text-slate-400 mt-2'>Ver mais</p>
                <p className='cursor-pointer text-slate-400 mt-2'>Ver mais</p>
            </div>
        )}
    </>
  )
}

export default RestaurantCard
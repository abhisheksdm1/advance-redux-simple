'use client'
import React from 'react';
import { uiActions } from './store/ui-slice';
import { useSelector ,useDispatch } from 'react-redux';
export default function Nav() {
  const dispatch= useDispatch()
    const handlerToggle =()=>{
        dispatch(uiActions.toggle())
    }
    const count = useSelector((state) => state.ui.cartIsVisible);
    const countCart = useSelector((state) => state.cart.totalQuantity);    
    
    return (

    <div className='w-full flex justify-around items-center h-10 bg-orange-500'>
      <h1>React</h1>
      <div className='border-solid border-2 border-indigo-600 p-1 ' onClick={handlerToggle}>
        <span >cart</span><span className='' >{countCart}</span>
      </div>
    </div>
  )
}

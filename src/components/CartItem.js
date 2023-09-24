import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from './store/cart-slice';

export default function CartItem({title,quantity,total,price,id}) {
  const dispatch =useDispatch();

  const removeItemHandler =()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  const addItemHandler = ()=>{
    dispatch(cartActions.addItemToCart({
      id,title,price
}))
  }
  
  return (
    <div className='p-4 w-full bg-green-500'> 
      <div className='flex justify-between'>
      <p>{title}</p>
      <p>${total}.00<span1>(${price}.00/item)</span1></p>
      </div>
      <div className='flex justify-between'>
      <p>x{quantity}</p>
      <div>
        <button className='border-2 border-gray-600 pl-1 pr-1' onClick={removeItemHandler}>-</button>
        <button className='border-2 border-gray-600 pl-1 pr-1' onClick={addItemHandler}>+</button>
      </div>
      </div>
    </div>
  )
}

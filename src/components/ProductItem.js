import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from './store/cart-slice'
export default function ProductItem({id,title,price,desc}) {
  
  const dispatch=useDispatch()
  const addToCartHandler=()=>{
    dispatch(cartActions.addItemToCart({
          id,title,price
    }))
  }
  
  return (
    <div className='w-full mb-3 p-5 bg-gray-500 text-white'>
      <div className='flex justify-between pb-5'><p>{title}</p>
      <p>${price.toFixed(2)}</p>
      </div>
      <div className='flex justify-between items-end'>
      <p>{desc}</p>
      <button className='border-2 p-2 border-indigo-600 text-indigo-600' onClick={addToCartHandler}>Add to kart</button>
      </div>
    </div>
  )
}

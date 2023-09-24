import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
  
    const cartItems = useSelector(state=>state.cart.items)
    return (
    <div className='w-3/5 bg-gray-500 p-4'>
    <p>Your Shopping cart</p>
    {cartItems.map((items)=>(<CartItem key={items.id} id={items.id} title={items.name} quantity={items.quantity} total={items.totalPrice} price={items.price}/>))}
    </div>
  )
}

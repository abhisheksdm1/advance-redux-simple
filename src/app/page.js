'use client'
import Cart from '@/components/Cart'
import Nav from '@/components/Nav'
import Product from '@/components/Product'
import Section from '@/components/Section1'
import Image from 'next/image'
import { useSelector } from "react-redux"

export default function Home() {
  const count = useSelector((state) => state.ui.cartIsVisible); 
  const countCart = useSelector((state) => state.cart.totalQuantity); 

    return (
    <main className="flex min-h-screen flex-col items-center">
        <Nav/>
         {count && <Section />}
          {countCart>0 && <Cart/> }
        <Product/>
        </main>
  )
}

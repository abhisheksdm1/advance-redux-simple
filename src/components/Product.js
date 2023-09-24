import React from 'react'
import ProductItem from './ProductItem'

const DUMMY_PRODUCTS=[
  {id:'p1',
  price:6,
  title:'My first Book',
  desc:'The first book i ever wrote'
}, {id:'p2',
price:5,
title:'My second Book',
desc:'The second book i ever wrote'
}]

export default function Product() {
  return (
    <div className='w-3/5'>
    <h1>buy your favrouit Product</h1>
    {
      DUMMY_PRODUCTS.map((product)=>(
    <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} desc={product.desc}/>))}
    </div>
  )
}

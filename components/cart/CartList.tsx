import { CartProps } from '@/lib/interface'
import React from 'react'
import ProductInBag from './ProductInBag'

interface CartListProps {
    carts: CartProps[]
}

const CartList = ({carts}: CartListProps) => {
  return (
    <div className='w-full flex flex-col'>
        {
            carts.map((cart,index)=>(
                <ProductInBag key={index} cart={cart} />
            ))
        }            
    </div>
  )
}

export default CartList
'use client'
import { decreaseProductInCart, deleteProductInCart, increaseProductInCart } from '@/app/api/Cart'
import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { CartProps} from '@/lib/interface'
import { formatToVND } from '@/lib/format'
import { cn } from '@/lib/utils'
import { useOpenBag } from '@/providers/OpenBagProvider'


interface ModelInBagProps {
    cart: CartProps,
    setPrice: React.Dispatch<React.SetStateAction<number>>
}

const ProductInBag = ({cart, setPrice}: ModelInBagProps) => {
    const {reload, setReload } = useOpenBag()
    useEffect(()=>{
        setPrice(prev => prev += cart.productId.price * cart.quantity)
    },[])
    return (
        <div className="w-full text-[12px]">
        <div className="w-full relative flex items-center justify-between p-2 gap-4">
            <X
                onClick={()=>{
                    setPrice(prev=> prev -= cart.productId.price * cart.quantity)
                    deleteProductInCart(cart._id)
                    setReload(prev=>!prev)
                }} 
                width={16} height={16} 
                className="absolute top-0 right-0 cursor-pointer" 
            />
            <>
                      <div className="w-[100px]">
                          <Image
                              src={cart.productId.image || '/assets/images/logo_mini.png'}
                              alt=""
                              width={640}
                              height={640}
                              style={{width:"100px",height: "100px"}}
                          />
                      </div>
                      <div className="w-[180px]">
                          <h1 className="w-[180px] font-semibold">{cart.productId.name}</h1>
                          <p>{cart.productId.size}</p>
                          <p>{formatToVND(cart.productId.price)}</p>
                      </div>
                      </>
            <div className='flex border-2 border-black dark:border-white space-x-1'>
                <div
                
                className={cn('border-r-2 border-black px-1 cursor-pointer', cart.quantity <= 1 && 'pointer-events-none opacity-50')}
                onClick={()=>{
                    setPrice(prev=> prev -= cart.productId.price)
                    decreaseProductInCart(cart._id)
                    setReload(prev=>!prev)
                }}
                >
                    -
                </div>
                <p className='px-1'>{cart.quantity}</p>
                <div 
                className='border-l-2 border-black px-1 cursor-pointer'
                onClick={()=>{
                    setPrice(prev=> prev += cart.productId.price)
                    increaseProductInCart(cart._id)
                    setReload(prev=>!prev)
                }}
                >
                    +
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductInBag
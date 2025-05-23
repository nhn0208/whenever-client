'use client'

import { getAllCartByCustomerId } from '@/app/api/Cart'
import { CartProps } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import ProductInBag from "@/components/cart/ProductInBag"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useOpenBag } from "@/providers/OpenBagProvider"
import { formatToVND } from '@/lib/format'
import { useLogin } from '@/providers/LoginProvider'
import { ShoppingCart } from 'lucide-react'

const Bag = () => {
    const { auth } = useLogin()
    const [ carts,setCarts] = useState<CartProps[]>([])
    const {  reload } = useOpenBag()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [open,setOpen] = useState<boolean>(false)
    useEffect(()=>{
        if (auth)
        getAllCartByCustomerId(auth?._id)
        .then(data => {
            setCarts(data)
        })
    },[reload])

    useEffect(()=>{
        setTotalPrice(0)
    },[open])
    
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
            <div className='relative px-4'>
                <p className='absolute top-0 right-0 lg:bg-root rounded-full text-xs px-1'>{carts.length}</p>
                <ShoppingCart size={32}/>
            </div>
        </SheetTrigger>
        <SheetContent className='px-0 bg-[#ac2622] lg:w-[120] w-full'>
            <SheetHeader><SheetTitle className='text-2xl text-center'>Cart</SheetTitle></SheetHeader>
            <SheetDescription></SheetDescription>
            <div className='w-full flex flex-col'>
                {
                    carts.map((cart,index)=>(
                        <ProductInBag key={index} cart={cart} setPrice={setTotalPrice} />
                    ))
                }            
            </div>
            
            <div className='w-full flex items-center justify-between gap-2 px-2'>
                <div className='w-1/2 flex items-center justify-between border border-white text-white p-4'>
                    <span>total</span>
                    <p>{formatToVND(totalPrice)}</p>
                </div>
                <a
                onClick={()=>{
                    //setOpen(false)
                }}
                className='w-1/2 text-center p-4 border-2 border-black text-white' href={"/checkout"}>
                check out
                </a>
            </div>
        
        </SheetContent>
        
    </Sheet>
  )
}

export default Bag
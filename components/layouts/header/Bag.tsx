'use client'

import { getAllCartByCustomerId } from '@/app/api/Cart'
import { CartProps } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import ProductInBag from "@/components/cart/ProductInBag"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useOpenBag } from "@/providers/OpenBagProvider"

const Bag = ({userId}:{userId: string}) => {
    const [ carts,setCarts] = useState<CartProps[]>([])
    const {  reload, setReload} = useOpenBag()
    const [isParentEffectDone, setIsParentEffectDone] = useState(false);
    useEffect(()=>{
        const fetch = async ()=> {
            const data = await getAllCartByCustomerId(userId)
            setCarts(data)
            //console.log(data)
        }
        fetch().then(()=>{
            setIsParentEffectDone(prev=>!prev); // Đánh dấu useEffect của cha đã hoàn thành
        })
    },[reload])
    
  return (
    <Sheet>
        <SheetTrigger>
            <div className='relative px-4'>
                <p className='absolute top-0 right-0 bg-red-700 rounded-full text-xs px-1'>{carts.length}</p>
                <h1>bags</h1>
            </div>
        </SheetTrigger>
        <SheetContent className='px-0'>
            <SheetHeader><SheetTitle className='text-2xl text-center'>Cart</SheetTitle></SheetHeader>
            <SheetDescription></SheetDescription>
            <div className='w-full flex flex-col'>
                {
                    carts.map((cart,index)=>(
                        <ProductInBag key={index} cart={cart} isParentEffectDone={isParentEffectDone}/>
                    ))
                }            
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default Bag
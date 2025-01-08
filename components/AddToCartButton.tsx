import React from 'react'
import { Button } from './ui/button'
import { addProductToCart } from '@/app/api/Cart'
import { useOpenBag } from '@/providers/OpenBagProvider'
import { redirect, useRouter } from 'next/navigation'

interface Props {
  productId: string | null,
  userId: string | null
}

const AddToCartButton = (
  { productId, userId } : Props
) => {
  const { setOpen,setReload } = useOpenBag()
  const router = useRouter()
  const handleAddButton = () => {
    //console.log(productId)
    if (userId == null) {
      router.push('/sign-in')
    }
    if (userId && productId != '') {
      addProductToCart({customerId: userId,productId: productId}).then((data)=>{
        setReload(prev=>!prev)
        //console.log(data)
      })
      setOpen(true)
    }
  }
  return (
    <Button 
    onClick={()=>handleAddButton()}
    className="w-full p-8 border-[#ac2622] rounded-none bg-[#ac2622] hover:bg-[#ac2622] text-white shadow-[#ffc001]">
      <p className="font-semibold font-mono text-[16px]">add to cart</p>
    </Button>
  )
}

export default AddToCartButton
import React from 'react'
import { Button } from './ui/button'
import { addProductToCart } from '@/app/api/Cart'
import { useOpenBag } from '@/providers/OpenBagProvider'
import { useLogin } from '@/providers/LoginProvider'

interface Props {
  productId: string | null,
}

const AddToCartButton = (
  { productId } : Props
) => {
  const { auth , setOpenLogin } = useLogin()
  const { setReload } = useOpenBag()
  const handleAddButton = () => {
    //console.log(productId)
    if (!auth) {
      setOpenLogin(true)
    }
    if (auth && productId != '') {
      addProductToCart({customerId: auth._id,productId: productId}).then(()=>{
        setReload(prev=>!prev)
        //console.log(data)
      })
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
import { getProductById } from '@/app/api/Product'
import { CartProps, ProductProps } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import { formatToVND } from '@/lib/format'
import Image from 'next/image'

interface ProductInCheeckoutProps {
    cart: CartProps,
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}
const ProductInCheckout = ({cart, setTotalPrice}: ProductInCheeckoutProps) => {
    const [product, setProduct] = useState<ProductProps>()
    useEffect(()=>{
        //console.log("cart: ", cart)
        const fetch = async ()=> {
            const data = await getProductById(cart.productId._id)
            setProduct(data[0])
            setTotalPrice(prev=> (prev + data[0].price * cart.quantity))
        }
        fetch()
    },[])

    if (product) {
        return (
            <div className='w-full flex items-center justify-between border-b border-slate-300 py-2'>
            <div className='w-full flex'>
              <div className="relative rounded-lg border border-black">
                  <Image
                                                src={product.image || '/assets/images/logo_mini.png'}
                                                alt=""
                                                width={640}
                                                height={640}
                                                style={{width:"100px",height: "100px"}}
                                            />
                  <div className="absolute top-[-8px] right-[-8px] h-5 w-5 rounded-full bg-gray-500 text-center text-sm">{cart.quantity}</div>   
              </div>
              <div className="pl-4 w-full flex justify-between">
                <div>
                    <span>{product.name}</span><br/>
                    <h3>{product.size}</h3>
                </div>
                <h3>{formatToVND(product.price * cart.quantity)}</h3>
              </div>
            </div>
          </div>
        )
    }else {
        return <></>
    }
}

export default ProductInCheckout
'use client'
import { CartProps, ProductProps } from "@/lib/interface"
import { useEffect, useState } from "react"
import { getProductById } from "@/app/api/Product"
import ProductInfo from "./ProductInfo"

interface ModelInBagProps {
    cart: CartProps,
    isParentEffectDone: boolean
}

const ProductInBag = ({cart, isParentEffectDone}: ModelInBagProps) => {
    const [product, setProduct] = useState<ProductProps | undefined>()
    useEffect(()=>{
        //console.log("cart: ", cart)
        const fetch = async ()=> {
            const data = await getProductById(cart.productId)
            setProduct(data[0])
        }
        fetch()
    },[isParentEffectDone])
    
    if (product) {
        return (
          <ProductInfo cart={cart} product={product} />
        )
    }else {
        return <></>
    }
}

export default ProductInBag
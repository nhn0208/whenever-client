'use client'

import { getModelBySlug } from "@/app/api/Model"
import { ModelProps, ProductProps } from "@/lib/interface"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { formatToVND } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AddToCartButton from "@/components/AddToCartButton"
import ImageCarousel from "./MobileImageProductDetail"

const MobileProductDetail = () => {

    const pathname = usePathname();
    const parts = pathname.split("/")
    const [ model, setModel ] = useState<ModelProps | undefined>()
    const [ products, setProducts ] = useState<ProductProps[] | undefined>()
    const [productId, setProductId] = useState<string>('');
    useEffect(()=>{
        getModelBySlug(parts[parts.length -1]).then(data=>{
            setModel(data)
            setProducts(data.products)
        })
    },[])
  return (
    <div className="w-full">
      {
        model && (
            <div className="w-full">
                <ImageCarousel imageList={model.image} />
                <section className="w-full p-2 space-y-4 text-lg text-slate-950 dark:text-white">
                    <h1 className=" text-2xl font-serif font-thin mb-4">{model.name}</h1>
                    <p>{formatToVND(model.price)}</p>
                    <div className="w-full flex gap-20">
                        <p className="text-[10px] font-semibold text-gray-700">KÍCH THƯỚC</p>
                        <div className="flex space-x-2">
                        {products && products.map((product,index)=>(
                            <div key={index}>
                            <Button
                            disabled={product.instock === 0}
                            onClick={()=>setProductId(product._id)}
                            className={cn([
                                "bg-white hover:bg-white border rounded-none text-black text-xs uppercase font-mono font-thin shadow-md ",
                                productId === product._id && "border-black font-semibold",
                                ])}>
                                {product.size}
                            </Button>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                    <AddToCartButton productId={productId}/>
                    </div>
                    <p className="text-lg font-semibold uppercase font-mono">Mô tả sản phẩm</p>
                    <p className="whitespace-pre-line font-mono text-base">{model?.description}</p>
                </section>
            </div>
        )
      }
    </div>
  )
}

export default MobileProductDetail
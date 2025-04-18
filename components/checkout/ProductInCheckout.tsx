import { CartProps } from '@/lib/interface'
import { formatToVND } from '@/lib/format'
import Image from 'next/image'

interface ProductInCheeckoutProps {
    cart: CartProps,
}
const ProductInCheckout = ({cart}: ProductInCheeckoutProps) => {
    return (
        <div className='w-full flex items-center justify-between border-b border-slate-300 py-2'>
        <div className='w-full flex'>
          <div className="relative rounded-lg border border-black">
              <Image
                                            src={cart.productId.modelId.image[0] || '/assets/images/logo_mini.png'}
                                            alt=""
                                            width={640}
                                            height={640}
                                            style={{width:"100px",height: "100px"}}
                                        />
              <div className="absolute top-[-8px] right-[-8px] h-5 w-5 rounded-full bg-gray-500 text-center text-sm">{cart.quantity}</div>   
          </div>
          <div className="pl-4 w-full flex justify-between">
            <div>
                <span>{cart.productId.modelId.name}</span><br/>
                <h3>{cart.productId.size}</h3>
            </div>
            <h3>{formatToVND(cart.productId.modelId.price * cart.quantity)}</h3>
          </div>
        </div>
          </div>
    )
    
}

export default ProductInCheckout
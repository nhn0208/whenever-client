import { auth } from "@clerk/nextjs/server"
import ProductDetail from "@/components/product/productDetail"
const ProductPage = async () => {
    const { userId } = await auth()
  return (
    <div className="w-full">
      {
        <ProductDetail userId={userId}/>
      }
    </div>
  )
}

export default ProductPage
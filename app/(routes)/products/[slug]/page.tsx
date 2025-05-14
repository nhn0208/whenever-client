
import MobileProductDetail from "@/components/product/MobileProductDetail"
import ProductDetail from "@/components/product/productDetail"
const ProductPage = async () => {
  return (
    <div className="w-full">
      <div className="hidden lg:block"><ProductDetail /></div>
      <div className="lg:hidden"><MobileProductDetail /></div>
    </div>
  )
}

export default ProductPage
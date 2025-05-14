'use client'

import { Button } from '@/components/ui/button';
import { CartProps} from '@/lib/interface';
import{ useEffect, useState } from 'react'

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import { formatToVND } from '@/lib/format';
import AddressComponent from '@/components/checkout/address';
import { getAllCartByCustomerId } from '@/app/api/Cart';
import ProductInCheckout from './ProductInCheckout';
import { createNewOrder } from '@/app/api/Order';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/providers/LoginProvider';
import { useOpenBag } from '@/providers/OpenBagProvider';

enum paymentEnum {
  COD = 'COD',
  BANKING = 'BANKING'
}

const Checkout = () => {
  const {auth} = useLogin()
  const { reload} = useOpenBag()
  const router = useRouter();
    const [ carts,setCarts] = useState<CartProps[]>([])
    const [name,setName] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [address,setAddress] = useState<string>("");
    const [addressField,setAddressField] = useState<string>("");
    const [completed,setCompleted] = useState<boolean>(false)
    const [invoice,setInvoice] = useState<any>()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [paymentMethod, setPaymentMethod] = useState<paymentEnum>(paymentEnum.COD)
    useEffect(()=>{
      if (auth) {
        getAllCartByCustomerId(auth._id)
        .then(data => {
          data.forEach((cart: CartProps) => {
            setTotalPrice((prev) => prev + (cart.productId.modelId.price * cart.quantity))
          })
          setCarts(data)
          
        })
      }
    },[reload])

    useEffect(()=>{
      setCompleted(name !== '' && phone !== '' && address !== '' && addressField !=='' && carts.length > 0)
    },[name,phone,address,addressField])

    if ( invoice) {
      return (
        <div className='w-full p-20 flex flex-col items-center space-y-4'>
          <h1 className='text-2xl font-bold'>Đặt hàng thành công</h1>
          <div className='w-1/2 flex justify-center space-x-8'>
            <Button variant={"outline"}>
              <Link href={'/'}>Về trang chủ</Link>
            </Button>
            <Button variant={"outline"}>
              <Link href={'/invoice'}>Xem đơn hàng</Link>
            </Button>
          </div>
        </div>
      )
    }
    
  return (
      <div className='w-full flex lg:px-20 justify-center px-2'>
        <div className='space-y-4 w-full flex flex-col items-center lg:px-20'>
          <div className="w-full flex items-center space-x-2">
            <div className="w-1/2 lg:w-2/3 items-center">
              <Label htmlFor="name">Họ tên</Label>
              <Input id="name" placeholder="Họ tên" className='rounded-lg' onChange={e => setName(e.target.value)}/>
            </div>
            <div className='w-1/2 lg:w-1/3'>
              <Label htmlFor="phoneNumber">Số điện thoại</Label>
              <Input  id="phoneNumber" placeholder="Điện thoại" className='rounded-lg'  onChange={e => setPhone(e.target.value)}/>
            </div>
          </div>
          <div className="w-full items-center">
            <Label htmlFor="address">Địa chỉ</Label>
            <Input id="address" placeholder="Địa chỉ" className='rounded-lg'  onChange={e => setAddressField(e.target.value)}/>
          </div>
          <AddressComponent sendDataToParent={setAddress}/>
          <div className='border border-gray-500 rounded-lg w-full py-8 px-4'>
            <RadioGroup value={paymentMethod} onValueChange={value => setPaymentMethod(value as paymentEnum)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={paymentEnum.COD} id="r1"  />
                <Label htmlFor="r1" className='text-gray-500'>Thanh toán khi giao hàng (COD)</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex justify-between w-full pt-6'>
            <Link href="/cart" className="text-blue-600 text-sm">Giỏ hàng</Link>
            <Button 
              variant={"outline"} className='bg-blue-500 text-white p-6'
              disabled={!completed}
              onClick={()=> {
                const products: { productId: string; quantity: number; }[] = []
                carts.forEach( cart => {
                  products.push( { productId: cart.productId._id, quantity: cart.quantity})
                })
                const body = {
                  customerId: auth?._id,
                  products: products,
                  name: name,
                  phone: phone,
                  address: addressField + ' ' + address,
                  price: totalPrice,
                  feeship: address.includes("Hồ Chí Minh") ? 35000 : 45000,
                  paymentMethod: paymentMethod,
                }
                createNewOrder(body).then(()=> router.push("/orders"))
              }}
            >
              Đặt hàng
            </Button>
          </div>
        </div>
        {/**Cart */}
        <div className='hidden lg:block w-full border-l border-black p-8 pr-32'>
          {
            carts.map((cart,index) => (
              <ProductInCheckout key={index} cart={cart}/>
            ))
          }

          <div className='w-full py-4 space-y-2 border-b border-gray-300 text-gray-500'>
            <div className='w-full flex justify-between'>
              <p>Tạm tính</p>
              <p>{formatToVND(totalPrice)}</p>
            </div>
            <div className='w-full flex justify-between'>
              <p>Phí ship</p>
              <p>{formatToVND( address.length > 0 ? address.includes("Hồ Chí Minh") ? 35000 : 45000 : 0)}</p>
            </div>
          </div>
          <div className='w-full flex justify-between py-4 text-xl'>
            <h2>Tổng tiền</h2>
            <p>{formatToVND(totalPrice + ( address.length > 0 ? address.includes("Hồ Chí Minh") ? 35000 : 45000 : 0))}</p>
          </div>
        </div>
      </div>
  )
}

export default Checkout
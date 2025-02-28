import OrderList from '@/components/order/OrderList'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const OrdersPage = async () => {
    const { userId} = await auth()
    if (userId)
  return (
    <OrderList userId={userId}/>
  )
  else return <></>
}

export default OrdersPage
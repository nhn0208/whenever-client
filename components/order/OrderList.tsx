'use client'

import { getAllOrder } from '@/app/api/Order'
import React, { useEffect } from 'react'

interface OrderListProps {
    userId: string
}

const OrderList = ({userId} : OrderListProps) => {
    useEffect(()=>{
        getAllOrder(userId).then(data=>console.log(data))
    })
  return (
    <div>OrderList</div>
  )
}

export default OrderList
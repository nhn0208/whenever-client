import Checkout from '@/components/checkout/checkout'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const CheckoutPage = async () => {
  const { userId} = await auth()
  if (userId)
  return (
    <Checkout userId={userId}/>
  )
}

export default CheckoutPage
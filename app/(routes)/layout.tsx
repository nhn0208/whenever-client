'use client'

import React from 'react'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/Footer'
import OpenBagProvider from '@/providers/OpenBagProvider'
import LoginProvider from '@/providers/LoginProvider'
import LoginPopUp from '@/components/login/LoginPopUp'
import { SessionProvider } from 'next-auth/react'

const MainLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <SessionProvider>
      <OpenBagProvider>
        <LoginProvider>
          <LoginPopUp/>
          <div className='relative'>
            <div className='w-full fixed top-0'><Header/></div>
            <div className='mt-[155px]'>{children}</div>
            <Footer/>
          </div>
        </LoginProvider>
      </OpenBagProvider>
    </SessionProvider>
  )
}

export default MainLayout
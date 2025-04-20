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
  )
}

export default MainLayout
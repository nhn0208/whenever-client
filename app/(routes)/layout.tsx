import React from 'react'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/Footer'
import OpenBagProvider from '@/providers/OpenBagProvider'
import LoginProvider from '@/providers/LoginProvider'
import LoginPopUp from '@/components/login/LoginPopUp'
import { SearchInput } from '@/components/layouts/header/Search'
import NavigationBar from '@/components/layouts/NavigationBar'
import Bag from '@/components/layouts/header/Bag'
import MobileSidebar from '@/components/layouts/sidebar/mobile-sidebar'

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
            <div className='w-full fixed top-0'>
              <div className='w-full hidden lg:block'><Header/></div>
              <div className='w-screen h-20 flex lg:hidden items-center justify-between px-2 py-5 gap-x-2 bg-root'>
                <div className='w-2/3'><SearchInput/></div>
                <div className='flex items-center justify-end gap-x-2'>
                  <Bag/>
                  <MobileSidebar/>
                </div>
              </div>
            </div>
            <div className='mt-20 w-full lg:mt-[155px]'>{children}</div>
            <Footer/>
            {/* <NavigationBar/> */}
          </div>
        </LoginProvider>
      </OpenBagProvider>
  )
}

export default MainLayout
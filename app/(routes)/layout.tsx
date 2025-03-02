import React from 'react'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/Footer'
import LoginPopUp from '@/components/login/LoginPopUp'

const MainLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
        <div className='relative'>
            <LoginPopUp/>
            <Header/>
          <div className=' mt-[155px]'>{children}</div>
          <Footer/>
        </div>
  )
}

export default MainLayout
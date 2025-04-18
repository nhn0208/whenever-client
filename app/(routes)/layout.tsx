import React from 'react'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/Footer'

const MainLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
        <div className='relative'>
            <div className='w-full fixed top-0'><Header/></div>
            <div className='mt-[155px]'>{children}</div>
          <Footer/>
        </div>
  )
}

export default MainLayout
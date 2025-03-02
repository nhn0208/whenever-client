import React from 'react'
import Logo from './Logo'
import Sidebar from '../sidebar/sidebar'
import Search from './Search'
import Bag from './Bag'
import Login from './Login'

const Header = async () => {
  return (
    <div className='w-full h-[114px] flex items-center justify-between px-10 py-5'>
      <Sidebar/>
      <Logo />
      <div className='flex items-center font-bold gap-x-8'>
        <Search/>
        <Bag />
        <Login/>
      </div>
    </div>
  )
}

export default Header
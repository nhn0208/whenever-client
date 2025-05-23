import React from 'react'
import Logo from './Logo'
import Sidebar from '../sidebar/sidebar'
import Bag from './Bag'
import Login from './Login'
import { SearchInput } from './Search'

const Header = async () => {
  return (
    <div className='w-full h-[114px] flex items-center justify-between px-10 py-5 bg-white'>
      <Sidebar/>
      <div className='w-1/2 flex flex-col items-center justify-center gap-x-8'>
        <Logo />
        <SearchInput />
      </div>
      <div className='flex items-center font-bold gap-x-8'>
        <Bag />
        <Login/>
      </div>
    </div>
  )
}

export default Header
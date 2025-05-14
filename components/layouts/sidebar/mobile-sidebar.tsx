'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { useLogin } from '@/providers/LoginProvider'
import { SessionProvider, signOut } from 'next-auth/react'
import Profile from '../header/Profile'
import Logo from '../header/Logo'
import { logout } from '@/app/api/Auth'

const categories = [
    {
        name: "shop all",
        href: "/products/shop-all",
    },
    {
        name: "tees",
        href: "/products/tees",
    },
    {
        name: "sweatshirts",
        href: "/products/sweatshirts",
    },
    {
        name: "outerwear",
        href: "/products/outerwear",
    },
    {
        name: "bottoms",
        href: "/products/bottoms",
    },
    {
        name: "accessories",
        href: "/products/accessories",
    },
]

const MobileSidebar = () => {
    const [open, setOpen] = useState(false)
    const {auth, setOpenLogin} = useLogin()

    const handleLogout = async () => {
        await logout()
        await signOut()
      }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
        <div className=' text-primary  border-primary p-2 hover:opacity-80'>
            <Menu width={20} height={20}/>
        </div>
        </SheetTrigger>
        <SheetContent className="bg-white w-full dark:bg-black px-0">
        <SheetHeader className='pb-8'>
            <div onClick={()=>setOpen(false)}><Logo/></div>
        </SheetHeader>
        <div className='bg-root w-full h-20'>
            {
                auth ? (
                    
                    <SessionProvider>
                        <div className='w-full  flex items-center px-4 text-white'>
                            <h1>Xin chào, {auth?.username}</h1>
                            <p 
                                onClick={()=>handleLogout()}
                                className='border border-white rounded-md text-xs px-2'>
                                    Đăng xuất
                            </p>
                        </div>
                    </SessionProvider>
                ) : (
                    <div className='w-full h-full flex items-center justify-between px-4 text-white'>
                        <h1>Bạn chưa đăng nhập. </h1>
                        <p onClick={()=>{
                            setOpenLogin(true)
                            setOpen(false)
                        }} className='border border-white rounded-md p-2 bg-white text-root'>Đăng nhập ngay</p>
                    </div>
                )
            }
        </div>
        <div className="flex flex-col overflow-auto">
            {   
                categories.map((category,index)=>(
                    <a key={index} href={category.href}>
                        <h1 className="p-2 font-bold border-b">{category.name}</h1>
                    </a>
                ))
            }
        </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
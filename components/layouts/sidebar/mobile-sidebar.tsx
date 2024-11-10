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

const categories = [
    {
        name: "shop all",
        href: "/shop-all",
    },
    {
        name: "tees",
        href: "/tees",
    },
    {
        name: "sweatshirts",
        href: "/sweatshirts",
    },
    {
        name: "outerwear",
        href: "/outerwear",
    },
    {
        name: "bottoms",
        href: "/bottoms",
    },
    {
        name: "accessories",
        href: "/accessories",
    },
]

const MobileSidebar = () => {
    const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
        <div className=' text-primary  border-primary border rounded-full p-2 hover:opacity-80'>
            <Menu width={20} height={20}/>
        </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
        <SheetHeader className='pb-8'>
            <SheetTitle className='text-[20px]'>Menu</SheetTitle>
        </SheetHeader>
        <div className="p-6 flex flex-col overflow-auto border-y-[2px] ">
            {   
                categories.map((category,index)=>(
                    <Link key={index} href={category.href}>
                        <span className="hover:font-bold">{category.name}</span>
                    </Link>
                ))
            }
        </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"

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

const Sidebar = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="font-bold">Sản phẩm</h1>
                <ChevronDown width={20} height={20}/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup className="flex flex-col  gap-y-4">
            
            {categories.map((category,index)=>(
                    <Link key={index} href={category.href} className="hover:font-bold">
                        <DropdownMenuItem>
                            <span >{category.name}</span>
                        </DropdownMenuItem>
                    </Link>
                ))
            }
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default Sidebar
import { ChevronDown } from "lucide-react"
import Link from "next/link"

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

const Sidebar = () => {
  return (
    <div className="group relative h-10">
        <div className="flex items-center gap-2">
            <h1 className="font-bold">Sản phẩm</h1>
            <ChevronDown width={20} height={20}/>
        </div>
        <div className="hidden group-hover:flex flex-col absolute top-8 left-0 
        w-[224px] h-[300px] border border-gray-300 gap-y-4 p-8"
        >
            {
                categories.map((category,index)=>(
                    <Link key={index} href={category.href}>
                        <span className="hover:font-bold">{category.name}</span>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar
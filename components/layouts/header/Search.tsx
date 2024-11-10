import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SearchIcon } from 'lucide-react'

const Search = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <h1>search</h1>
        </SheetTrigger>
        <SheetContent side={"top"}>
            <div className='w-full h-[114px] flex items-center justify-center'>
                <div className='w-1/3 flex items-center relative'>
                    <input className='w-full h-[50px] border z-1 focus-visible:border-2'/>
                    <SearchIcon width={24} height={24} className='absolute z-2 right-2' />
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default Search
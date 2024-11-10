import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Bag = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <h1>bags</h1>
        </SheetTrigger>
        <SheetContent >
            <div className='w-full h-[114px] flex items-center justify-center'>
                <div className='w-1/3 flex items-center relative'>
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default Bag
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, SetStateAction,  useEffect, useState } from 'react'
import {address} from '@/lib/address'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'


const AddressComponent = ({ sendDataToParent } : { sendDataToParent : any }) => {
    const [openCity, setOpenCity] = useState(false)
    const [openDistrict, setOpenDistrict] = useState(false)
    const [openWard, setOpenWard] = useState(false)
    const [tinhThanh,setTinhThanh] = useState<string>('');
    const [quanHuyen,setQuanHuyen] = useState<string>('');
    const [phuongXa,setPhuongXa] = useState<string>('');
    
    useEffect(()=>{
        if ( tinhThanh === '' || quanHuyen === '') {

        } else {
          sendDataToParent(`${phuongXa} ${quanHuyen} ${tinhThanh}`)
        }
    },[tinhThanh,quanHuyen,phuongXa])

  return (
    <div className='w-full space-x-2 space-y-2 flex lg:flex-row flex-col justify-center items-center'>
        <div className='w-full lg:w-1/3'>
            {/**Tỉnh thành */}
            <Popover open={openCity} onOpenChange={setOpenCity}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCity}
                    className="w-full justify-between"
                  >
                    {tinhThanh !== '' && tinhThanh === address.find((tinh) => tinh.Name === tinhThanh)?.Name
                      ? address.find((tinh) => tinh.Name === tinhThanh)?.Name
                      : "Chọn tỉnh thành"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 h-[255px] overflow-y-scroll space-x-4">
                    <h3 className='bold pl-4 pt-2'>Chọn tỉnh thành</h3>
                {address.map((tinh,index)=>(
                            <div key={index}  className='flex items-center pl-2 py-2 '>
                                <span
                                onClick={()=>{
                                    setTinhThanh(tinh.Name)
                                    setQuanHuyen('');
                                    setPhuongXa('')
                                    setOpenCity(false)
                                }}>{tinh.Name}</span>
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        tinh.Name === tinhThanh ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </div>
                        ))}
                </PopoverContent>
            </Popover>
        </div>
        {/**Quận huyện */}
        <div className='w-full lg:w-1/3'>
            <Popover open={openDistrict} onOpenChange={setOpenDistrict}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openDistrict}
                    className="w-full justify-between"
                  >
                    {quanHuyen !== '' && quanHuyen === address.find((tinh) => tinh.Name === tinhThanh)?.Districts.find((quan) => quan.Name === quanHuyen)?.Name
                      ? address.find((tinh) => tinh.Name === tinhThanh)?.Districts.find((quan) => quan.Name === quanHuyen)?.Name
                      : "Chọn quận huyện"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 h-[255px] overflow-y-scroll space-x-4">
                <h3 className='bold pl-4 pt-2'>Chọn quận huyện</h3>
                {address.find((tinh) => tinh.Name === tinhThanh)?.Districts.map((quan,index)=>(
                            <div key={index} className='flex items-center pl-2 py-2'>
                                <span  onClick={()=>{
                                    setQuanHuyen(quan.Name)
                                    setOpenDistrict(false)
                                }}>{quan.Name}</span>
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        quan.Name === quanHuyen ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </div>
                        ))}
                </PopoverContent>
            </Popover>
            </div>
            {/**Phường xã */}
            <div className='w-full lg:w-1/3'>
            <Popover open={openWard} onOpenChange={setOpenWard}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openWard}
                    className="w-full justify-between"
                  >
                    {phuongXa !== ''
                      ? address.find((tinh) => tinh.Name === tinhThanh)?.Districts.find((quan) => quan.Name === quanHuyen)?.Wards.find((phuong)=>  phuong.Name === phuongXa)?.Name
                      : "Chọn phường xã"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 h-[255px] overflow-y-scroll space-x-4">
                <h3 className='bold pl-4 pt-2'>Chọn phường xã</h3>
                {address.find((tinh) => tinh.Name === tinhThanh)?.Districts.find((quan) => quan.Name === quanHuyen)?.Wards.map((phuong,index)=>(
                            <div key={index} className='flex items-center pl-2 py-2'>
                                <span  onClick={()=>{
                                    setPhuongXa(phuong.Name? phuong.Name : '')
                                    setOpenWard(false)
                                }}>{phuong.Name}</span>
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        phuong.Name === phuongXa ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </div>
                        ))}
                </PopoverContent>
            </Popover>
            </div>
    </div>
  )
}

export default AddressComponent
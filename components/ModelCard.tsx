import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ModelProps } from '@/lib/interface';
import { formatToVND } from '@/lib/format'

interface ModelCardProps {
    model : ModelProps
}

const ModelCard = (
    { model} : ModelCardProps
) => {
    const router = useRouter();
    
  return (
    <div
    onClick={()=> router.push(`/products/${model.slug}`)}    
     className="w-[330px] h-[440px] flex flex-col p-4 items-center justify-between
       hover:border-2 hover:border-[#ffc001] group" >
        <p className='font-bold text-center invisible group-hover:visible' >{model.name}</p>
        <div className='w-full h-3/4'>
        <Image
         src={ model.image[0] || '/assets/images/logo_mini.png'}
         alt='' width={400} height={600}
         style={{width: "full",height:"full"}}
         decoding='async' data-nimg='1' priority
        />
        </div>
        <p className='w-full text-xs text-right invisible group-hover:visible'>{formatToVND(model.price)}</p>
    </div>
  )
}

export default ModelCard
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ModelProps } from '@/lib/interface';
import { formatToVND } from '@/lib/format'
import Link from 'next/link';

interface ModelCardProps {
    model : ModelProps
}

const ModelCard = (
    { model} : ModelCardProps
) => {
  return (
    <Link
    href={`/products/${model.slug}`}
     className="lg:w-[330px] lg:h-[440px] w-1/2 flex flex-col lg:p-4 items-center lg:justify-between justify-center
       lg:hover:border-2 hover:border-[#ffc001] group" >
        <p className='hidden lg:inline font-bold text-center invisible group-hover:visible' >{model.name}</p>
        <div className='w-full lg:h-3/4'>
        <Image
         src={ model.image[0] || '/assets/images/logo_mini.png'}
         alt='' width={400} height={600}
         style={{width: "full",height:"full"}}
         decoding='async' data-nimg='1' priority
        />
        </div>
        <p className='w-full font-bold text-center text-xs p-2' >{model.name}</p>
        <p className='w-full text-xs lg:text-right text-center lg:invisible group-hover:visible'>{formatToVND(model.price)}</p>
    </Link>
  )
}

export default ModelCard
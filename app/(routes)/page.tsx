import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <section>
      <h1 className='text-8xl font-bold text-center'>CRAFTING ART, WHENEVER INSPIRATION STRIKES</h1>
      <Image 
        src={"https://theme.hstatic.net/200000725513/1001328481/14/slide_1_img.jpg?v=287"} 
        alt=''
        width={2048}
        height={2560}
        style={{width: '100%', height: "auto"}}
      />
      <div className='max-w-[1300px] mx-auto'>
        <div className='w-full h-screen flex justify-between items-center py-20 gap-[160px]'>
          <div className='w-1/2 h-full'>
            <div className='w-full h-1/2 space-y-8'>
              <h1 className='font-bold text-6xl'>OUR DEDICATION</h1>
              <p className='text-lg'>
                Since 2024, Whenever has produced and woven fabric for the cooton felt line, in order to achieve quantitative and colored targets as required. This is the reason why the product has superior quality and more beautiful appearance. The clear difference between real fabirc and fake fabirc is undeniable
              </p>
            </div>
            <div className='w-full h-1/2 space-y-8'>
              <h1 className='font-bold text-6xl'>OUR STANCE</h1>
              <p>
                Since 2024, Whenever has produced and woven fabric for the cooton felt line, in order to achieve quantitative and colored targets as required. This is the reason why the product has superior quality and more beautiful appearance. The clear difference between real fabirc and fake fabirc is undeniable
              </p>
            </div>
          </div>
          <div className='w-1/2 h-full'>
            <Image alt='' src={"/assets/images/our_dedication.jpg"} width={538} height={616} className=' object-cover w-full h-full'/>
            <Image alt='' src={"/assets/images/our_stance.jpg"} width={538} height={616} className=' object-cover w-full h-full'/>
          </div>
        </div>          
      </div>
    </section>
  )
}

export default Homepage
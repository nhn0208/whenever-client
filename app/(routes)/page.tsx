import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <section>
      <h1 className='w-full text-8xl font-bold'>CRAFTING ART, WHENEVER</h1>
      <h1 className='w-full text-8xl font-bold text-right'> INSPIRATION STRIKES</h1>
      <Image 
        src={"https://theme.hstatic.net/200000725513/1001328481/14/slide_1_img.jpg?v=287"} 
        alt=''
        width={2048}
        height={2560}
        style={{width: '100%', height: "auto"}}
      />
    </section>
  )
}

export default Homepage
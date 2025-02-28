import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <a href={'/'}>
        <Image src="/assets/images/logo.png" alt='' width={286} height={59}/>
    </a>
  )
}

export default Logo
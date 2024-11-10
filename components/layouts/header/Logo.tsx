import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image src="/assets/images/logo.png" alt='' width={286} height={59}/>
    </Link>
  )
}

export default Logo
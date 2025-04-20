'use client'
import { useLogin } from '@/providers/LoginProvider'
import Profile from './Profile'
import { SessionProvider } from 'next-auth/react'

const Login =  () => {
  const {auth, setOpenLogin} = useLogin()
  if (auth) {
     return <SessionProvider><Profile /></SessionProvider>
  } else {
    return (
      <p onClick={()=>setOpenLogin(true)} className='cursor-pointer'>login</p>
    )
  }
}

export default Login
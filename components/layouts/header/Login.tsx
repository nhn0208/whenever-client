'use client'
import { useLogin } from '@/providers/LoginProvider'
import Profile from './Profile'

const Login =  () => {
  const {auth, setOpenLogin} = useLogin()

  return (
    <div>
      {auth ? (
        <Profile />
      ):(
        <p onClick={()=>setOpenLogin(true)} className='cursor-pointer'>login</p>
      )}
    </div>
  )
}

export default Login

import { useLogin } from '@/providers/LoginProvider'
import Profile from './Profile'

const Login =  () => {
  const {auth, setOpenLogin} = useLogin()
  if (auth) {
     return <Profile />
  } else {
    return (
      <p onClick={()=>setOpenLogin(true)} className='cursor-pointer'>login</p>
    )
  }
}

export default Login
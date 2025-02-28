import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import Profile from './Profile'

const Login =  ({userId}:{userId: string | null}) => {
  return (
    <div>
      {userId ? (
        <Profile />
      ):(
        <a href={'/sign-in'}>login</a>
      )}
    </div>
  )
}

export default Login
'use client'
import { useState } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { cn } from "@/lib/utils"
import { useLogin } from "@/providers/LoginProvider"


const LoginPopUp = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false)
  const { openLogin} = useLogin()
  return (
    <div className={cn(
      'absolute inset-0 w-full h-screen bg-black/60 z-10 flex items-center justify-center',
      !openLogin ? 'animate-out fade-out slide-out slide-out-to-bottom duration-300 invisible' : 'animate-in fade-in slide-in-from-bottom duration-300'
    )}>
      {
        isSignUp ? <SignUp setIsSignUp={setIsSignUp}/> : <SignIn setIsSignUp={setIsSignUp}/>
      }
    </div>
  )
}

export default LoginPopUp
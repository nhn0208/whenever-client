'use client'

import { useLogin } from '@/providers/LoginProvider'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Eye, EyeOff, X } from 'lucide-react'
import { login } from '@/app/api/Auth'

interface SignInProps {
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn = ({setIsSignUp} : SignInProps) => {
  const { setOpenLogin} = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("") 

  const [ isFocusedUsername ,setIsFocusedUsername] = useState<boolean>(false)
  const [ isFocusedPassword ,setIsFocusedPassword] = useState<boolean>(false)

  const normalizeGmail = (gmail: string) => {
    let [local, domain] = gmail.toLowerCase().split('@');

    if (domain === 'gmail.com') {
        local = local.replace(/\./g, ''); 
    }
    return `${local}@${domain}`;
  }

  const handleSubmit = async (event : any) => {
    event.preventDefault(); // Chặn reload trang
    login({username: normalizeGmail(email), password: password})
    .then((response)=>{
      //console.log(response)
      if ( response.message === 'Login successful') window.location.reload()
      else setErrorMessage(response.message)
    })
  }

  return (
    <form onSubmit={handleSubmit} 
    className="relative w-[400px] h-[500px] bg-root flex flex-col flip-left
                justify-center items-center rounded-lg z-20 text-white p-10"
    >
      {/* Nút đóng */}
      <X size={20} className="absolute top-2 right-2 cursor-pointer" 
      onClick={() => {
        setOpenLogin(false)
        setEmail("")
        setPassword("")
        setErrorMessage('')
      }} />
      
      {/* Logo */}
      <Image src="/assets/images/logo.png" alt="" width={286} height={59} />
      {/* Form Inputs */}
      <div className="w-full flex flex-col space-y-6 my-10">
        {/* Email */}
        <div className="w-full relative">
          <label className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all z-1 ${isFocusedUsername ? "top-2 text-xs text-gray-400" : "text-sm"}`}>
            Email
          </label>
          <Input
            type="email"
            className="relative px-3 py-6 w-full border-0 border-b-2 rounded-none z-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocusedUsername(true)}
            onBlur={(e) => setIsFocusedUsername(e.target.value !== "")}
            required
          />
        </div>
        {/* Password */}
        <div className="w-full relative">
          <label className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all z-1 ${isFocusedPassword ? "top-2 text-xs text-gray-400" : "text-sm"}`}>
            Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            className="relative py-6 px-3 w-full border-0 border-b-2 rounded-none z-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={(e) => setIsFocusedPassword(e.target.value !== "")}
            required
          />
          {errorMessage && (
            <div className="w-full text-red-500 text-sm mt-2">{errorMessage}</div>
          )}
          <button type="button" className="absolute inset-y-0 right-3 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {/* Submit Button */}
        <button type="submit" className="bg-transparent border-2 rounded-full hover:bg-white/10">
          Login
        </button>
      </div>
      {/* Register Link */}
      <p>
        Don't have an account? <span className="font-bold underline cursor-pointer" onClick={()=>setIsSignUp(true)}>Sign Up</span>
      </p>
    </form>
  )
}

export default SignIn
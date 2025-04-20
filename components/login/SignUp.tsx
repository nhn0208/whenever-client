'use client'

import { useLogin } from '@/providers/LoginProvider'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Eye, EyeOff, X } from 'lucide-react'
import { requestOTP, verifyOTP, signUp } from '@/app/api/Auth'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { normalizeGmail } from '@/lib/format'
  

interface SignUpProps {
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>
}
const SignUp = ({setIsSignUp}: SignUpProps) => {
  const { setOpenLogin} = useLogin();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string>('')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [show,setShow] = useState<boolean>(true)

  const [errorMessage, setErrorMessage] = useState("")
  const [errorMessage2, setErrorMessage2] = useState("")

  const [ isFocusedUsername ,setIsFocusedUsername] = useState<boolean>(false)
  const [ isFocusedPassword ,setIsFocusedPassword] = useState<boolean>(false)
  const [ isFocusedConfirmPassword ,setIsFocusedConfirmPassword] = useState<boolean>(false)

  const handleSubmit = async (event : any) => {
    event.preventDefault(); // Chặn reload trang
    requestOTP({email :normalizeGmail(email)})
    .then((response)=>{
        //console.log(response)
        if ( response.message === 'OTP sent successfully') {
            setShow(false)
        }
        else setErrorMessage(response.message)
    })
    }

  const handleSubmitOTP = async (event : any) =>{
    event.preventDefault();
    verifyOTP({email: normalizeGmail(email), otp})
    .then((response)=>{
        if ( response.message === 'OTP verified successfully') {
            signUp({username: normalizeGmail(email),password})
            .then((response)=>{
                //console.log(response)
                setIsSignUp(false)
            })
        }
        else setErrorMessage2(response.message)
    })
  }
  if (show)
  return (
    <form onSubmit={handleSubmit} 
    className="relative w-[400px] h-[500px] bg-root flex flex-col justify-center
                 items-center rounded-lg z-20 text-white p-10 flip-right"
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
            <button type="button" className="absolute inset-y-0 right-3 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
        {/* Confirm Password */}
        <div className="w-full relative">
            <label className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all z-1 ${isFocusedConfirmPassword ? "top-2 text-xs text-gray-400" : "text-sm"}`}>
                Confirm password
            </label>
            <Input
                type={showConfirmPassword ? "text" : "password"}
                className="relative py-6 px-3 w-full border-0 border-b-2 rounded-none z-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setIsFocusedConfirmPassword(true)}
                onBlur={(e) => setIsFocusedConfirmPassword(e.target.value !== "")}
                required
            />
            <button type="button" className="absolute inset-y-0 right-3 text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
       
        {errorMessage && (
          <div className="w-full text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        {/* Submit Button */}
        <button type="submit" className="bg-transparent border-2 rounded-full hover:bg-white/10">
          Continue
        </button>
      </div>
      {/* Register Link */}
      <p>
        You alrealdy have an account? <span className="font-bold underline cursor-pointer" onClick={()=>setIsSignUp(false)}>Sign In</span>
      </p>
    </form>
  )
  else return (
    <form onSubmit={handleSubmitOTP} 
        className="relative w-[400px] h-[500px] bg-root flex flex-col justify-center
                    items-center rounded-lg z-20 text-white p-10 flip-right"
        >
        {/* Nút đóng */}
        <X size={20} className="absolute top-2 right-2 cursor-pointer" 
        onClick={() => {
            setOpenLogin(false)
            setEmail("")
            setPassword("")
            setErrorMessage2('')
        }} />
        
        {/* Logo */}
        <Image src="/assets/images/logo.png" alt="" width={286} height={59} />
        {/* Form Inputs */}
        <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value)=>setOtp(value)}
        >
            <InputOTPGroup>
                <InputOTPSlot index={0}/>
                <InputOTPSlot index={1}/>
                <InputOTPSlot index={2}/>
                <InputOTPSlot index={3}/>
                <InputOTPSlot index={4}/>
                <InputOTPSlot index={5}/>
            </InputOTPGroup>
        </InputOTP>
        {errorMessage2 && (
          <div className="w-full text-red-500 text-sm mt-2">{errorMessage2}</div>
        )}
        <div className="w-full flex flex-col space-y-6 my-10">
            {/* Submit Button */}
            <button type="submit" className="bg-transparent border-2 rounded-full hover:bg-white/10">
                Continue
            </button>
        </div>
        {/* Register Link */}
        <p>
            You alrealdy have an account? <span className="font-bold underline cursor-pointer" onClick={()=>setIsSignUp(false)}>Sign In</span>
        </p>
    </form>
  )
}

export default SignUp
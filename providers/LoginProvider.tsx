'use client';

import { isLogin } from "@/app/api/Auth";
import { User } from "@/lib/interface";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useOpenBag } from "./OpenBagProvider";

interface LoginProviderProps {
    openLogin: boolean,
    setOpenLogin:React.Dispatch<React.SetStateAction<boolean>>,
    auth: User | undefined,
    setAuth: React.Dispatch<React.SetStateAction<User | undefined>>
}

const OpenLoginContext = createContext<LoginProviderProps | undefined>(undefined);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const {setReload} = useOpenBag()
  const [ openLogin, setOpenLogin] = useState<boolean>(false)
  const [auth, setAuth] = useState<User | undefined>()
  useEffect(()=>{
      isLogin().then(data=>{
        //console.log(data)
        setReload(prev=>!prev)
        setAuth(data)
      })
    },[])

  return (
    <OpenLoginContext.Provider value={{ openLogin, setOpenLogin, auth, setAuth }}>
      {children}
    </OpenLoginContext.Provider>
  )
}

export const useLogin = () => {
  const context = useContext(OpenLoginContext);

  if(!context) throw new Error('useModel must be used within a LoginProvider');

  return context;
}

export default LoginProvider;
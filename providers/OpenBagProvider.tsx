'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

interface BagOpenProps {
    open: boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    reload: boolean,
    setReload:React.Dispatch<React.SetStateAction<boolean>>
}

const OpenBagContext = createContext<BagOpenProps | undefined>(undefined);

const OpenBagProvider = ({ children }: { children: React.ReactNode }) => {
  const [ open, setOpen] = useState<boolean>(false)
  const [ reload, setReload] = useState<boolean>(false)

  return (
    <OpenBagContext.Provider value={{ open, setOpen, reload, setReload }}>
      {children}
    </OpenBagContext.Provider>
  )
}

export const useOpenBag = () => {
  const context = useContext(OpenBagContext);

  if(!context) throw new Error('useModel must be used within a OpenBagProvider');

  return context;
}

export default OpenBagProvider;
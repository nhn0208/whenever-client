'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

interface Props {
    open: boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const OpenBagContext = createContext<Props | undefined>(undefined);

const OpenBagProvider = ({ children }: { children: React.ReactNode }) => {
  const [ open, setOpen] = useState<boolean>(false)

  return (
    <OpenBagContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenBagContext.Provider>
  )
}

export const useOpen = () => {
  const context = useContext(OpenBagContext);

  if(!context) throw new Error('useModel must be used within a OpenBagProvider');

  return context;
}

export default OpenBagProvider;
'use client'
import { FC, ReactNode } from 'react'
import {ThemeProvider} from 'next-themes'
import {SessionProvider} from 'next-auth/react'
interface ProvidersProps {
  
}

const Providers = ({children} :{children: ReactNode} ) => {
  return <ThemeProvider>
    <SessionProvider>{children}</SessionProvider>
  </ThemeProvider>
}

export default Providers
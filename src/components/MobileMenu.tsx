"use client"
import { FC } from 'react'
import { buttonVariants } from './ui/Button'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import ThemeToggle from './ThemeToggle'
import React, {useState} from 'react'
import type{ Session } from 'next-auth'
import Icons from './Icons'
import { createTheme ,ThemeProvider } from '@mui/material'
import { useTheme , } from 'next-themes'
import darkTheme from "prism-react-renderer/themes/nightOwl"
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import Link from 'next/link'

interface MobileMenuProps {
    session: Session | null
}

const MobileMenu: FC<MobileMenuProps> = ({session}) => {
    const [open,setOpen] = useState<boolean>(false)
    const { setTheme } = useTheme()

    // const darkTheme = createTheme({
    //   palette: {
    //     mode: applicationTheme === 'light' ? 'light' : 'dark',
    //   },
    // })


    
    return <div className={`md:hidden flex relative`} >


        <button 
            className={`${buttonVariants({variant: 'ghost'})}`}
            onClick={ ()=>{setOpen((pre)=>!pre)}}>
            <Icons.Menu />
        </button>

        {/* 白色模式 黑色模式 */}
        {   open?(        
            <div className='dark:text-slate-300 absolute bg-slate-50 dark:bg-gray-900 dark:border-slate-600 border rounded shadow p-5 bottom-0 translate-y-full right-0'>
                <div className=' text-center' onClick={()=>{setOpen(pre=>!pre)}}>
                    <div className=' mb-2'>Theme</div>

                    <button onClick={()=>{setTheme('light')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Sun className='mr-2 h-4 w-4'/>
                        <span>Light</span>
                    </button>

                    <button onClick={()=>{setTheme('dark')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Moon className='mr-2 h-4 w-4'/>
                        <span>Dark</span>
                    </button>

                    <button onClick={()=>{setTheme('system')}} className={`${buttonVariants({variant: 'ghost'})} flex`}>
                        <Icons.Laptop className='mr-2 h-4 w-4'/>
                        <span>System</span>
                    </button>

                    <hr className='dark:opacity-70 mt-2 mb-2'/>

                    <Link href="/documentation" className={buttonVariants({variant: 'ghost'})}>
                        Documentation
                    </Link>

                    <hr className={`dark:opacity-70 mt-2 ${session? 'mb-2': 'mb-6' } `}/>

                    {session? (<>

                        <Link className={buttonVariants({variant: 'ghost' })}
                        href="/dashboard">
                            DashBoard
                        </Link>

                        <hr className='dark:opacity-70 mt-2 mb-6'/>
                        
                        <SignOutButton/>
                    </>): <SignInButton/>}
                </div>
            </div>) : null
        }
 
    </div>
}

export default MobileMenu
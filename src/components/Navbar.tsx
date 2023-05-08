// import { FC } from 'react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import ThemeToggle from './ThemeToggle'
import { authOptions } from '@/lib/auth'
// interface NavbarProps {
  
// }

// 當登入完成之後
const Navbar = async ({}) => {
    // 第三方登入的套件
    // authOptions 這裡撰寫 google登入的機制
    const session = await getServerSession(authOptions)
    
    // 'use client' 的話該console 會呈現在 client端
    // console.log('session!!!!!!!!!: ',session)
    
    // dark: 是切換成dark mode 時候呈現出來
    return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 broder-b border-slate-300
     dark:border-slate-700 shadow-sm flex items-center justify-between'>
        <div className=' container max-w-7xl mx-auto w-full flex justify-between items-center '>
            <Link href="/" className={buttonVariants({variant: 'link'})}>
                Text Similarity 1.0
            </Link>

            <div className=' md:hidden'>
                <ThemeToggle></ThemeToggle>
            </div>

            <div className=' hidden md:flex gap-4'>
                <ThemeToggle></ThemeToggle>
                <Link href="/documentation" className={buttonVariants({variant: 'ghost'})}>
                    Documentation
                </Link>

                {/* 
                    當登入完成 會長出該區塊,
                    第三方登入之後會產生session的資料
                */}
                {session? (<>
                    <Link className={buttonVariants({variant: 'ghost' })}
                    href="/dashboard">
                        DashBoard
                    </Link>
                    <SignOutButton/>
                </>): <SignInButton/>}
            </div>
        </div>
     </div>
}

export default Navbar
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['vietnamese'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className={cn('bg-white text-slate-900 antialiased', inter.className )}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
          <Providers>
            {children}

            {/* @ts-expect-error Server Component */}
            <Navbar/>
          </Providers>
          
          {/* 留給mobile 更多的高度 */}
          <div className='h-40 md:hidden'></div>
          
        </body>
    </html>
  )
}

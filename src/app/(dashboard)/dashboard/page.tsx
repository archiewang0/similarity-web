import { FC } from 'react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import RequestApiKey from '@/components/RequestApiKey'
import ApiDashboard from '@/components/ApiDashboard'
interface pageProps {
  
}

// 寫入seo
export const metadata: Metadata={
    title: '相似詞 API | DashBoard',
    description: "免費並且開源的同義字API"
}

const page = async () => {
    const user = await getServerSession(authOptions)
    if(!user) {
        return notFound()
    }
    const apiKey = await db.apiKey.findFirst({
        where: {userId: user.user.id , enabled:true}
    })
  return (
    <div className=' max-w-7xl mx-auto mt-16'>
        {apiKey ? <ApiDashboard/> : <RequestApiKey/>}
    </div>
  )
}

export default page
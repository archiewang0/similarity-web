// import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'
// interface pageProps {
  
// }

// 寫入seo 
export const metadata: Metadata = {
    title: '相似詞 API | Documentation',
    description: '免費 & 開源 相似詞API'
}

const page = () => {
  return <div className=' container max-w-7xl mx-auto mt-12'>
    <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Make requirst</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs></DocumentationTabs>
    </div>
  </div>
}

export default page
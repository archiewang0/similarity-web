import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Paragraph from '@/components/ui/Paragraph'
import Heading1 from '@/components/ui/LargeHeading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-red-500'>
      <Paragraph  size='sm'>
        some test
      </Paragraph>
      <Heading1/>
    </main>
  )
}

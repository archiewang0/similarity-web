import { FC } from 'react'
import { Tabs , TabsList , TabsTrigger ,TabsContent } from './ui/Tabs'

interface DocumentationTabsProps {
  
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return <Tabs>
    <TabsList defaultValue='nodejs' className=' max-w-2xl w-full'>
        <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
  </Tabs>
}

export default DocumentationTabs
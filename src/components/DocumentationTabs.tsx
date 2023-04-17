import { FC } from 'react'
import { Tabs , TabsList , TabsTrigger ,TabsContent } from './ui/Tabs'
import Code from './Code'
interface DocumentationTabsProps {
  
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return <Tabs>
    <TabsList defaultValue='nodejs' className=' max-w-2xl w-full'>
        <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
    {/* <SimpleBar></SimpleBar> */}
    <Code />
    </TabsContent>
    <TabsContent value='python'></TabsContent>
  </Tabs>
}

export default DocumentationTabs
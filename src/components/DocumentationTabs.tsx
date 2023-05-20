"use client"
import { FC } from 'react'
import { Tabs , TabsList , TabsTrigger ,TabsContent } from './ui/Tabs'
import Code from './Code'
import { nodejs , python ,vanillajs} from '@/helpers/documentation-code'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
interface DocumentationTabsProps {
  
}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
    <TabsList>
        <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
        <TabsTrigger value='javascript'>javascript</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
      <SimpleBar>
        <Code animated language='javascript' code={nodejs} show/>
      </SimpleBar>
    </TabsContent>
    <TabsContent value='javascript'>
      <SimpleBar>
        <Code animated language='javascript' code={vanillajs} show/>
      </SimpleBar>
    </TabsContent>
    <TabsContent value='python'>
      <SimpleBar>
        <Code animated language='python' code={python} show/>
      </SimpleBar>
    </TabsContent>
  </Tabs>
}

export default DocumentationTabs
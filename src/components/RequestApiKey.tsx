"use client"
import { FC, FormEvent, useState } from 'react'
import {toast} from "./ui/toast"
import { createApiKey } from '@/helpers/create-api-key'
import { Key } from 'lucide-react'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import CopyButton from '@/components/CopyButton'
import { Input } from './ui/Input'
import Button from './ui/Button'
interface RequestApiKeyProps {
  
}

const RequestApiKey: FC<RequestApiKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apikey , setApikey] = useState<string|null>(null) 

    const createNewApiKey = async(e:FormEvent)=>{
        e.preventDefault()
        setIsCreating(true)

        try{
            const generatedApiKey = await createApiKey()
            setApikey(generatedApiKey)
        } catch(err) {
            if(err instanceof Error){
                toast({
                    title: 'Error',
                    message: err.message,
                    type: 'error'
                })
                return
            }
            toast({
                title: 'Error',
                message: '發生一些錯誤',
                type: 'error'
            })
        } finally {
            setIsCreating(false)
        }

    }
  return <div className=' md:max-w-2xl container'>
    <div className='flex flex-col gap-6 items-center'>
        <Key className=' mx-auto h-12 w-12 text-gray-400'/>
        <LargeHeading>Request your api key</LargeHeading>
        <Paragraph>You haven&apos;t request API key yet</Paragraph>
    </div>
    <form
      onSubmit={createNewApiKey}
      className=" mt-6 sm:flex sm:items-center" action='#'>
        <div className='relative rounded-md shadow-md sm:min-w-0 sm:flex-1'>
          {apikey? 
              <CopyButton 
                type='button' 
                className=" absolute inset-y-0 right-0"
                valueToCopy={apikey}
                /> 
            : 
          null}
          <Input readOnly value={apikey?? ""} placeholder="Request API會顯示在這裡"/>
        </div>
        
        <div className='mt-3 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
          <Button disabled={!!apikey} isLoading={isCreating} >
            Request Key
          </Button>
        </div>
    </form>
  </div>
}

export default RequestApiKey
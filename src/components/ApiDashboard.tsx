"use client"

import { FC, FormEvent, useState } from 'react'
import {toast} from "./ui/toast"

interface ApiDashboardProps {
  
}

const ApiDashboard: FC<ApiDashboardProps> = ({}) => {
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
            }
        }
    }

  return <div>ApiDashboard</div>
}

export default ApiDashboard
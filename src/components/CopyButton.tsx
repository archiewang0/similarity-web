"use clinet"

import { Copy } from 'lucide-react'
// import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, FC } from 'react'
import Button from './ui/Button'
import { toast } from './ui/toast'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({
    valueToCopy,
    className,
    ...props
}) => {
  return <Button {...props} 
    variant="ghost"
    className={className}
    onClick={()=>{
    navigator.clipboard.writeText(valueToCopy)
    toast({
        title: 'Copied!',
        message: 'API 已經複製到copyboard了',
        type: 'success'
    })
  }}>
    <Copy className='h-5 w-5'/>
  </Button>
}

export default CopyButton
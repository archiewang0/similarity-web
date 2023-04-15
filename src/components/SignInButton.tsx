"use client"

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import Button from './ui/Button'

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async()=>{
        setIsLoading(true)
        try{
            await signIn('google')
        } catch{
            // toast({
            //     title: '登入錯誤',
            //     message: '請稍後再試',
            //     type: 'error'
            // })
        }
    }
    return <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign In
    </Button>
}

export default SignInButton
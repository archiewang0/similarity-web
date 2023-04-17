"use client"
// 使用到useState 會需要使用 'use client' 來判斷是client side


import { FC, useEffect, useState } from 'react'
import {defaultProps, type Language} from "prism-react-renderer"
// 跑出打code的動畫
import { useTheme , } from 'next-themes'
import darkTheme from "prism-react-renderer/themes/nightOwl"
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'

import Highlight from 'prism-react-renderer'

interface CodeProps {
  code: string
  show: boolean
  language: Language
  animationDelay?: number
  animated?: boolean
}

const Code: FC<CodeProps> = ({
    code,
    language,
    show,
    animated,
    animationDelay
}) => {
    const {theme: applicationTheme} = useTheme()
    const [text, setText] = useState(animated? '' : code)
    
    useEffect(()=>{
        if(show && animated) {
            let i = 0
            setTimeout(()=>{
                const interValid = setInterval(()=>{
                    setText(code.slice(0, i))
                    i++
                    if(i> code.length){
                        clearInterval(interValid)
                    }
                }, 15)

                return ()=>clearInterval(interValid)
            }, animationDelay || 150)
        }
    },[code, show , animated ,animationDelay ])

    const lines = text.split(/\r\n|\r|\n/).length
    // 每個文字都切開 \r 是enter \n 是換行

    const theme = applicationTheme === 'light' ? lightTheme : darkTheme

    return <Highlight {...defaultProps} code={text} language={language} theme={theme}>
        {({className , tokens , getLineProps , getTokenProps})=>(
            <pre 
                className={className + 'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'}
                style={{
                    maxHeight: show? lines * 24  : 0,
                    opacity: show? 1 : 0
                }}>
                    {tokens.map((line , i) => {
                        
                        // 阻止eslint的 IDE 錯誤發生
                        // eslint-disable-next-line no-unused-vars
                        const {key , ...rest } = getLineProps({line, key:i})

                        return (
                            <div key={`line-${i}`} 
                                style={{position: 'relative'}}
                                {...rest}>
                                {line.map((token,index) => {
                                    
                                    // eslint-disable-next-line no-unused-vars
                                    const {key , ...props } = getTokenProps({token ,i})
                                    return <span key={index} {...props}></span>
                                })}
                            </div>
                        )
                    })}
                </pre>

        )}
    </Highlight>
}

export default Code
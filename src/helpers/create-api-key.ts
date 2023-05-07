import { CreateApiData } from "@/types/api/key"

export async function createApiKey() {
    // 這裡會去 吃page/api 內的資料
    const res = await fetch('/api/api-key/create')
    const data = (await res.json()) as CreateApiData

    if(data.error || !data.createdApiKey) {
        if(data.error instanceof Array) {
            throw new Error(data.error.join(' '))
        } 
        throw new Error(data.error ?? "發生錯誤")
    }   
    
    return data.createdApiKey.key
}


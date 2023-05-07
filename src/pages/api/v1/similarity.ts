// import { cosineSimilarity } from '@/helpers/consine-similarity'
// import { withMethods } from '@/lib/api-middlewares/with-methods'
// import { db } from '@/lib/db'
// import { openai } from '@/lib/openai'
// import { NextApiRequest, NextApiResponse } from 'next'
// import { z } from 'zod'

// // 使用zod 進行type schema 的撰寫
// // text1 text2 都是限制1000的字串
// const reqSchema = z.object({
//   text1: z.string().max(1000),
//   text2: z.string().max(1000),
// })

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // req 不確定型別 
//   // user 可能會 key 預期外的資料
//   const body = req.body as unknown

//   const apiKey = req.headers.authorization
//   if (!apiKey) {
//     return res.status(401).json({ error: 'Unauthorized' })
//   }

//   try {
//     // 以schema 的型別以及架構 來解析 req的資料
//     const { text1, text2 } = reqSchema.parse(body)

//     // 先驗證 db apikey
//     const validApiKey = await db.apiKey.findFirst({
//       where: {
//         key: apiKey,
//         enabled: true,
//       },
//     })

//     if (!validApiKey) {
//       return res.status(401).json({ error: 'Unauthorized' })
//     }

//     const start = new Date()

//     // embeddings 會將文字編譯成 number[]  
//     const embeddings = await Promise.all(
//       [text1, text2].map(async (text) => {
//         const res = await openai.createEmbedding({
//           // 針對openal 選擇model <- 該模型是免費?
//           model: 'text-embedding-ada-002',
//           input: text,
//         })

//         return res.data.data[0].embedding
//       })
//     )

//     // await 之後直接帶入 consineSimilarity 
//     const similarity = cosineSimilarity(embeddings[0], embeddings[1])

//     const duration = new Date().getTime() - start.getTime()

//     // Persist request
//     await db.apiRequest.create({
//       data: {
//         duration,
//         method: req.method as string,
//         path: req.url as string,
//         status: 200,
//         apiKeyId: validApiKey.id,
//         usedApiKey: validApiKey.key,
//       },
//     })

//     return res.status(200).json({ success: true, text1, text2, similarity })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.log('error!!!!!!!:',error)
//       return res.status(400).json({ error: error.issues })
//     }

//     return res.status(500).json({ error: 'Internal server error' })
//   }
// }


// export default withMethods(['POST'], handler)

import { cosineSimilarity } from '@/helpers/cosine-similarity'
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { db } from '@/lib/db'
import { openai } from '@/lib/openai'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const reqSchema = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown

  const apiKey = req.headers.authorization

  if (!apiKey) {
    return res.status(401).json({ error: 'Unauthorized' })
  }


    const { text1, text2 } = reqSchema.parse(body)
    // console.log('check!',text1, text2)
    // const text1 = 'breed'
    // const text2 = 'sex'

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })
    // console.log('check!',validApiKey)


    if (!validApiKey) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const start = new Date()
    const embeddings = await Promise.all(
      [text1, text2].map(async (text) => {
        const res = await openai.createEmbedding({
          model: 'text-embedding-ada-002',
          input: text,
        })

        return res.data.data[0].embedding
      })
    )

    // console.log('check!',embeddings)

    const similarity = cosineSimilarity(embeddings[0], embeddings[1])

    const duration = new Date().getTime() - start.getTime()

    // Persist request
    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    })


    try {

    return res.status(200).json({ success: true, text1, text2, similarity })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues })
    }

    return res.status(500).json({ error: 'Internal server error' , other: error})
  }
}

export default withMethods(['POST'], handler)
import { authOptions } from "@/lib/auth";
import {withMethods} from "@/lib/api-middlewares/with-methods"
import { db } from "@/lib/db";
import { CreateApiData } from "@/types/api/key";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import {nanoid} from "nanoid"
// nanoid 產生id 套件？
import z from "zod"


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<CreateApiData>
  ) => {
    try {
      const user = await getServerSession(req, res, authOptions).then(
        (res) => res?.user
      )
  
      if (!user) {
        return res.status(401).json({
          error: 'Unauthorized to perform this action.',
          createdApiKey: null,
        })
      }
  
      const existingApiKey = await db.apiKey.findFirst({
        where: { userId: user.id, enabled: true },
      })
  
      if (existingApiKey) {
        return res.status(400).json({
          error: 'You already have a valid API key.',
          createdApiKey: null,
        })
      }
  
      const createdApiKey = await db.apiKey.create({
        data: {
          userId: user.id,
          key: nanoid(32),
        },
      })
  
      return res.status(200).json({ error: null, createdApiKey })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.issues, createdApiKey: null })
      }
  
      return res
        .status(500)
        .json({ error: 'Internal Server Error', createdApiKey: null })
    }
  }
  
  export default withMethods(['GET'], handler)

// const handler = async (
//     req: NextApiRequest,
//     res: NextApiResponse<CreateApiData>
// )=>{
//     try{
//         const user = await getServerSession(req,res,authOptions).then((res)=>res?.user)
//         // const user = await getServerSession(req, res, authOptions).then(
//         //           (res) => res?.user
//         //         )

//         if(!user) {
//             return res.status(401).json({
//                 error: '未經授權 無法執行後續動作',
//                 createdApiKey: null
//             })
//         }

//         const existingApiKey = await db.apiKey.findFirst({
//             where: {userId: user.id , enabled:true}
//         })

//         if(existingApiKey) {
//             return res.status(400).json({
//                 error: '你已經有可使用的API key',
//                 createdApiKey: null
//             })
//         }

//         const createdApiKey = await db.apiKey.create({
//             data: {
//                 userId: user.id,
//                 key: nanoid(32),
//             },
//         })

//         return res.status(200).json({error:null , createdApiKey})
//     } catch(err){
//         if(err instanceof z.ZodError) {
//             return res.status(400).json({
//                 error: err.issues,
//                 createdApiKey: null
//             })
//         }

//         return res.status(500).json({
//             error: '伺服器錯誤',
//             createdApiKey: null
//         })
//     }
// }

// // export default handler
// export default withMethods(['GET'], handler)


// 
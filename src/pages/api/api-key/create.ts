import { authOptions } from "@/lib/auth";
import {withMethods} from "@/lib/api-middlewares/with-methods"
import { db } from "@/lib/db";
import { CreateApiData } from "@/types/api/key";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import {nanoid} from "nanoid"
// nanoid 產生id 套件？
import z from "zod"

// 這裡會被 fe 的一些method 做一些fetch的動作
// 所以這裡也會跟資料庫進行一些資料交換
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

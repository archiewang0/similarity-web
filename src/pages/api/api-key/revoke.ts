import { withMethods } from '@/lib/api-middlewares/with-methods'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { RevokeApiData } from '@/types/api/key'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

// 這裡會被 fe 的一些method 做一些fetch的動作
// 所以這裡也會跟資料庫進行一些資料交換
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<RevokeApiData>
) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (res) => res?.user
    )

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized', success: false })
    }

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    })

    if (!existingApiKey) {
      return res
        .status(500)
        .json({ error: 'This API key could not be revoked.', success: false })
    }

    // 無效的 api key
    await db.apiKey.update({
      where: { id: existingApiKey.id },
      data: {
        enabled: false,
      },
    })

    return res.status(200).json({ error: null, success: true })

  } catch (error) {
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, success: false })
    }

    return res
      .status(500)
      .json({ error: '伺服器錯誤', success: false })
  }
}

export default withMethods(['POST'], handler)
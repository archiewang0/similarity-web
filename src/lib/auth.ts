import { NextAuthOptions } from "next-auth";
import { db } from "@/lib/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import GoogleProvier from "next-auth/providers/google"

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if(!clientId || clientId.length === 0){
        throw new Error('No clientId for google provider set')
    }

    if(!clientSecret || clientSecret.length === 0){
        throw new Error('No clientSerect for google provider set')
    }

    return {clientId ,clientSecret}
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages:{
        signIn: '/login'
    },
    // 如果只使用 process.env.xxx 
    // 可能會形成兩個型別 一個是 string 一個是 undefined
    // undefined 是因為
    providers: [
        GoogleProvier({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        })
    ],
    callbacks:{
        async session({token,session}){
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        },
        async jwt({token , user}){
            const dbUser = await db.user.findFirst({
                where:{
                    email: token.email
                }
            })
            if(!dbUser){
                token.id = user!.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image
            }
        },
        redirect() {
            return '/dashboard'
        }
    }
}

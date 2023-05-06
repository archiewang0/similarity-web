/* eslint-disable no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

// 這裡將定義套件 所使用的obj 新增key 以及型別
// interface 命名一樣的的方式 會將該名稱的定義的型別合併一起
// 如 interface a {a: string} interface a {b: boolean}
// 之後 interface a {a:string , b: boolean} 的型別

// 使用之後 使用該套件 JWT 就會需要帶入id 的需求
declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId
        }
    }
}

// /* eslint-disable no-unused-vars */
// import type { Session, User } from 'next-auth'
// import type { JWT } from 'next-auth/jwt'

// type UserId = string

// declare module 'next-auth/jwt' {
//   interface JWT {
//     id: UserId
//   }
// }

// declare module 'next-auth' {
//   interface Session {
//     user: User & {
//       id: UserId
//     }
//   }
// }
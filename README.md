This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# similarity-web
使用技術:
- next13 
    - app的頁面資料結構需要查一下官網
    
- typescript
- tailwind
- nextAuth
- nextTheme
- cva(class-variance-authority)
- lucide-react ? 
- radix-ui ? ui library
- jwt
- prisma ? 與db溝通的工具?
    - yarn prisma db push
        可以把 prisma 資料table 推上去 planetscale 這個db中
    - yarn prisma generate

- https://planetscale.com/ db 
- google cloude console ?用在註冊google登入
    - 選擇menu > 選擇 "apis和服務" > 選擇"憑證" > 
        點擊"建立憑證" > 選擇"OAuth 用戶端 ID" > 點選"設定同意畫面" > 點選"外部" > 填好申請資料 > 
        返回"憑證" > 再次點擊"建立憑證" > 再次選擇"OAuth 用戶端 ID" >
        到達資料表單 下拉選項選擇"網路應用程式"(這是針對web的選項) 以及設定該 auth 的名稱以及 授權的domain 範圍 >
        送出表單之後 返回"憑證" 會顯示剛剛設定的 "OAuth 用戶端 ID" 出現在 "憑證" 的list中的 "OAuth 2.0 用戶端 ID" 地方 >

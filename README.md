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
- mui 
- cva(class-variance-authority)
- radix-ui ? ui library
- upstash ?數據管理平台

- lucide-react ? 
- jwt
- prisma ? 與db溝通的工具?
    - yarn prisma db push
        可以把 prisma 資料table 推上去 planetscale 這個db中
    - yarn prisma generate
        打通db 我們才可以連線

- https://planetscale.com/ db? db常常一段時間會有問題, 可能是免費？
    - 經過一段時候 會斷開connet, 需要新建立 password 並且到 root/.env 更換 DATABASE_URL? 這問題需要再解決
    - 更換過 db的url 之後需要在 重新 yarn dev 執行

- google cloude console ?用在註冊google登入
    - 選擇menu > 選擇 "apis和服務" > 選擇"憑證" > 
        點擊"建立憑證" > 選擇"OAuth 用戶端 ID" > 點選"設定同意畫面" > 點選"外部" > 填好申請資料 > 
        返回"憑證" > 再次點擊"建立憑證" > 再次選擇"OAuth 用戶端 ID" >
        到達資料表單 下拉選項選擇"網路應用程式"(這是針對web的選項) 以及設定該 auth 的名稱以及 授權的domain 範圍 >
        送出表單之後 返回"憑證" 會顯示剛剛設定的 "OAuth 用戶端 ID" 出現在 "憑證" 的list中的 "OAuth 2.0 用戶端 ID" 地方 >
- nanoid ? 產生id套件
- zod 
    - 撰寫 type schema 之後針對不確定的資料(fetch 回傳的respond) 進行型別確認,
        也可以將 schema 直接轉換成 型別, 供給需要的資料使用

- date-fns ? 時間套件?
- openai 
    - 需要進入 https://platform.openai.com/ 並且新增scerect key, 之後複製該key, 就可以到 
    - root/.env OPENAI_API_KEY貼上複製的key
    - 一段時間要重複產生serect key 來替換, 就有的key 會消失

- node v18.0.0 yarn 1.22.19
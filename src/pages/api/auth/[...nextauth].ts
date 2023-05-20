import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";

// 主要是 等入之後這裡會被觸發
// authOtions 裡面塞入的 serectID 會進行驗證,
export default NextAuth(authOptions)
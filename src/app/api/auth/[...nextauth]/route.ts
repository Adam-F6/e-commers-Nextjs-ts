
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import { authOptions } from "@/Auth";


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
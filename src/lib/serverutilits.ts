'use server'
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export const getUserToken = async () => {
    
    const sessioonToken = (await cookies()).get('next-auth.session-token')?.value
     const token = await decode({token:sessioonToken , secret:process.env.AUTH_SECRET!})



return token?.token as string
}












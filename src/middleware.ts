import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse, NextRequest } from "next/server"

export default withAuth(
  async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const url = request.nextUrl


    if (token && (url.pathname.startsWith("/Login") || url.pathname.startsWith("/register"))) {
      return NextResponse.redirect(new URL("/", request.url))
    }


    if (
      !token &&
      (url.pathname.startsWith("/Wishlist") || url.pathname.startsWith("/cart"))
    ) {
      return NextResponse.redirect(new URL("/Login", request.url))
    }


    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true, 
    },
  }
)

export const config = {
  matcher: ["/cart", "/Wishlist", "/Login", "/register" , "/cart/visa" , "/allorders"],
}

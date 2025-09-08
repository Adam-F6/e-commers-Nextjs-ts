import { email } from './../../node_modules/zod/src/v4/core/regexes';
import NextAuth , {User} from "next-auth"


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {

user:{

name:string
email:string
role:string


}
token:string


  }
  interface Session {
user:{

name:string
email:string
role:string


}
token:jwt


  }
  }

import  CredentialsProvider  from 'next-auth/providers/credentials';
import { NextAuthOptions } from "next-auth"
export const authOptions:NextAuthOptions = {

pages: {
  signIn: "/Auth/Login",
},


    providers:[

CredentialsProvider(

    {
name:"Credentials",

    credentials: {
      email: { label: "Username",
         type: "text" ,
         placeholder: "jsmith" },
      password: { label: "Password", 
        type: "password" }
    },
authorize: async (credentials) => {

const res = await fetch (`${process.env.API_BASE_URL}/api/v1/auth/signin` , {

    method:"POST",

body: JSON.stringify({

email:credentials.email,
password:credentials.password,

}),
headers:{
    "Content-Type":"application/json"
}
})
const data = await res.json();
  if (res.ok) {
    return {id: data.user.email , user:data.user     ,  token:data.token   }
  }
  else{
    throw Error (data?.message || "error in the data")
  }
}
    }
)

    ],
    callbacks:{

     async jwt({  token    ,   user    }){

if (user) {token.user = user.user
token.token = user.token}

return token
      }
, async session({session , token}){

session.user = token.user as { name: string; email: string; role: string; }

session.token = token.token

  return session
}


    }
}
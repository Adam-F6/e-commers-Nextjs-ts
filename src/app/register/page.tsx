"use client";

import { refine, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { Loader2Icon } from "lucide-react"
import { useState } from "react";
import Error from './../error';


const RegistarSchema = z.object({

  email: z.string().email({ message: "Please enter a valid email address" }),

  password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),

     rePassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)

      ,name: z.string().min(3)

       ,phone: z.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)

}).refine((data)=>data.password === data.rePassword , {
  error:"make sure the re-password matches the password"
})

type RegisterFormData = z.infer<typeof RegistarSchema>;

export default function Registration() {

const router = useRouter();
  const [isLoading , setIsLoading] = useState(false)

  const Ruot = useRouter()
  const form = useForm<RegisterFormData>({

    resolver: zodResolver(RegistarSchema),
    defaultValues: {
    "name": "",
    "email":"",
    "password":"",
    "rePassword":"",
    "phone":""
},

  });

  const onSubmit = async (data: RegisterFormData) => {

    setIsLoading(true)
try{
   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,
    {method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    } )


    signIn("credentials",{
email:data.email
,password:data.password
,callbackUrl:"/"
,redirect: false
    })

if (!res?.ok) {
        toast.error('error')
}else{
 toast.success("Welcome")
  Ruot.replace("/")
}
}

finally{
  setIsLoading(false)
}



  };

  return (
    <div className=" sm:pt-48 sm:py-32 pt-32 pb-16 bg-amber-50 w-full flex-col flex items-center">

<div className=" pb-5 text-4xl text-cyan-900">Welcome</div>

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-80 p-4 border rounded-xl shadow-sm"
      >


        <FormField
          control={form.control}
        
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
        
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>repassword</FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



   <FormField
          control={form.control}
        
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="01*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />




        <Button type="submit" disabled={isLoading} className="cursor-pointer w-full">
    {isLoading ? ( <><Loader2Icon className=" mx-auto animate-spin" /></>) : ("Signup") }

        </Button>
      </form>
    </Form>
        <div className="my-3" >already have account? <span className=" cursor-pointer text-orange-500" onClick={() => router.push("/Login")}>Login</span> </div>

<div> forget your password? <span className=" cursor-pointer text-orange-500" onClick={() => router.push("/Revalidate")}>create a new one</span> </div>

    </div>
  );
}

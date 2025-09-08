"use client";

import { z } from "zod";
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
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react"
import { useState } from "react";


const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type RePass = z.infer<typeof loginSchema>;

export default function LoginForm() {

const router = useRouter();
  const [isLoading , setIsLoading] = useState(false)

  const Ruot = useRouter()
  const form = useForm<RePass>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: ""
    },
  });

  


    const onSubmit = async (data: RePass) => {
  
      setIsLoading(true)
  try{
     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      {method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      } )
  
  
      signIn("credentials",{
  email:data.email
  ,callbackUrl:"/"
  ,redirect: false
      })
  
  if (!res?.ok) {
          toast.error('error')
  }else{
   toast.success("check your email")
    Ruot.replace("/ResetCode")
  }
  }
  
  finally{
    setIsLoading(false)
  }
  
    };





  return (
  <div className=" sm:pt-40 sm:py-32 pt-28 pb-16 bg-amber-50 w-full flex-col flex items-center">

<div className=" pb-5 text-4xl text-cyan-900">Welcome</div>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-80 p-4 border rounded-xl shadow-sm"
      >

        <FormField
          control={form.control}
        
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <Button type="submit" disabled={isLoading} className="cursor-pointer w-full">
    {isLoading ? ( <><Loader2Icon className=" mx-auto animate-spin" /></>) : ("send code") }

        </Button>
    
      </form>
    </Form>
    <div className="my-3" > don`t have account? <span className=" cursor-pointer text-orange-500" onClick={() => router.push("/register")}>SignUp</span> </div>

<div>already have acount? <span className=" cursor-pointer text-orange-500" onClick={() => router.push("/Login")}>Login</span> </div>

    </div>
  );
}

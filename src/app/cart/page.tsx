'use client'

import { useCart } from '../Context/cartContext';
import CartItem from './cartItem/page';
import { Button } from '@/components/ui/button';
import { checkOut , rmoveAllCartItems } from '@/lib/servises/cart';
import { toast } from 'sonner';
import { z  } from "zod";
import { Input } from "@/components/ui/input";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, useRouter } from 'next/navigation';





const loginSchema = z.object({
 details: z.string().min(8).max(120)
 ,phone: z.string().regex(/^(?:(?:\+20|0020)[\s-]?(?:10|11|12|15)[\s-]?\d{8}|0(?:10|11|12|15)[\s-]?\d{8})$/)
,city: z.string().regex(/^(Cairo|Giza|Alexandria|Port Said|Suez|Damietta|Dakahlia|Sharqia|Qalyubia|Kafr El Sheikh|Gharbia|Monufia|Beheira|Ismailia|Beni Suef|Faiyum|Minya|Asyut|Sohag|Qena|Luxor|Aswan|Red Sea|New Valley|Matrouh|North Sinai|South Sinai)$/)
});

  type orderData = z.infer<typeof loginSchema>;





export default function CartPage() {


const router = useRouter()

const {cart} = useCart()

  const form = useForm<orderData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });





 const {getCartData  } = useCart()
  const removeAll = async () => {
 await rmoveAllCartItems()
   toast.promise(  getCartData(),{
    loading:"removing ... . ."
    ,success:"remove done"
    ,error:"pleas try again"
   })
}



  const handelCheckOut = async (data : orderData) => {
const formData =     {"shippingAddress" : data}
await checkOut(cart?.cartId , formData)
   toast.promise(  getCartData(),{
    loading:"checking ... . ."
    ,success:"done"
    ,error:"pleas try again"
   })
router.push('/allorders')
}



const products = cart?.data?.products

  return (

    <div className=' pt-16'>
    {!products? "Loding...." : products?.length === 0 ?(

  <div className='text-center my-28'>
<h2 className='text-2xl font-semibold text-gray-600 mb-4'>Your cart is empty</h2>
<p className='text-gray-600 mb-8'>Add some products to get started</p>
  </div>
 ) : (
    <div className="min-h-screen pt-24 pb-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12">
          YOUR CART
          <Button className=' mx-8 rounded-full bg-red-600 hover:bg-red-500 cursor-pointer' onClick={() => removeAll() }>Clear Your Cart</Button>

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
       
  
              
              <div className='lg:col-span-2'>
              <div className=' bg-neutral-50 rounded-b-lg p-6'>

<div className=''>

{products.map((item: any) => (
  <CartItem key={item._id} item={item}/>
))}

</div>


              </div>
            </div>
            
            
        
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-lg">EGP: 1700</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Discount (-20%)</span>
                  <span className="font-bold text-lg text-red-500">-EGP: 120 </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">400</span>
                  <span className="font-bold text-lg">EGP: 240 </span>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-2xl font-bold">EGP: 1300 </span>
                </div>
     

<div className=' text-center text-2xl '>COD Check Out</div>

 <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handelCheckOut)}
        className="space-y-4 w-80 p-4 border rounded-xl shadow-sm"
      >

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>details</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your details" {...field} />
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
                <Input type="text" placeholder="Enter your Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />




          <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>city</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





        <Button  type="submit" className="rounded-full cursor-pointer w-full">
Checkout
        </Button>
    
      </form>
    </Form>


<Button onClick={() => router.push('/cart/visa')} className='cursor-pointer rounded-full w-full'>Pay with Visa&Master Card</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )

}


  </div>);
}


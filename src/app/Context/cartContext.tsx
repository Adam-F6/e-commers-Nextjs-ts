'use client'
import { getUserCart } from '@/lib/servises/cart';
import { useSession } from 'next-auth/react';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface CartContextTypes {
  getCartData: () => Promise<void>;
  cart:any;
  cartCount:number
}
export const cartContext = createContext <CartContextTypes | undefined>(undefined)
export default function CartContextProvider({children} : {children : ReactNode}) {

const [cart , setCart] = useState(null)
const [cartCount , setCartCount] = useState(0)

const {data} = useSession()

const getCartData = async () =>{
try{
const cart = await getUserCart() 
setCart(cart)
setCartCount(cart?.numOfCartItems)

}
catch(error){
console.log(error)
}
}
useEffect(()=>{
  if (data?.user) {
    getCartData()
  }
}, [data?.user])
const value = { getCartData , cart , cartCount}
  return (
    <cartContext.Provider value={value} >{children}</cartContext.Provider>
  )
}

export const useCart = () =>{

  const context = useContext(cartContext)

if (context === undefined) {
  throw Error('Must log in first')
}

return context
}











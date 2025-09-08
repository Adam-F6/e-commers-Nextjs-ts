'use client'

import { Skeleton } from '@/components/ui/skeleton';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useCart } from '../Context/cartContext';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const {cartCount} = useCart()


  const {status , data} = useSession();



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-violet-50 border-violet-50 backdrop-blur-sm border-b shadow-sm">


       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navitems */}
        
        <div className="flex items-center justify-between h-16">
          

          <div className="flex items-center">
            <button 
              onClick={() => router.push("/")}
              className="text-2xl font-bold text-gray-900 hover:text-zinc-600 hover:scale-105 transition duration-150 cursor-pointer"
            >
              SHOP.CO
            </button>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => router.push("/")}
              className="text-gray-900 hover:text-zinc-600 font-medium hover:scale-105 transition duration-150 cursor-pointer"
            >
              Shop
            </button>
            <button 
              onClick={() => router.push("/CtegorisPage")}
              className="text-gray-900 hover:text-zinc-600 font-medium hover:scale-105 transition duration-150 cursor-pointer"
            >
              Categories
            </button>
            <button 
              onClick={() => router.push("/Brands")}
              className="text-gray-900 hover:text-zinc-600 font-medium hover:scale-105 transition duration-150 cursor-pointer"
            >
              Brands
            </button>
            <button 
              onClick={() => router.push("/Wishlist")}
              className="text-gray-900 hover:text-zinc-600 font-medium hover:scale-105 transition duration-150 cursor-pointer"
            >
              Wishlist
            </button>
          </div>

{/* serch */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className=" cursor-pointer block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
{/* serch */}

          <div className="flex items-center space-x-4">
            

            <button className="lg:hidden p-2 text-gray-600 hover:text-zinc-600 hover:scale-105 transition duration-150">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

 
            <button 
              onClick={() => router.push("/cart")}
              className="relative p-2 text-gray-600 hover:text-zinc-600 hover:scale-105 transition duration-150"
            >
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className=' cursor-pointer'><path d="M16.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM8.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4.84 3.94l-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H6.27c-.1-.44-.3-.86-.61-1.21-.5-.53-1.2-.84-1.92-.84H2c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84ZM20.51 8.75H5.17c-.42 0-.76.32-.8.73l-.36 4.35A2.922 2.922 0 0 0 6.92 17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 0 0-.79-.85Z" fill="#555555"></path></svg>

              <span className="absolute -top-1 -right-1 h-5 w-5 bg-purple-800 text-white text-xs rounded-full flex items-center justify-center hover:scale-105 transition duration-150">
                {cartCount}
              </span>


            </button>

{/* Login */}

     { status === "loading" ? <Skeleton className=' w-16 h-6 bg-zinc-300'/> : status === "authenticated" ? 
     
     <button 
              onClick={() => signOut({ callbackUrl: "/Login"})}
              className="hidden sm:block px-4 py-2 text-gray-900 cursor-pointer hover:text-zinc-600 font-medium hover:scale-105 transition duration-150"
            >
              Logout
            </button>

     :  
        <button 
              onClick={() => router.push("/Login")}
              className="hidden sm:block px-4 py-2 text-gray-900 cursor-pointer hover:text-zinc-600 font-medium hover:scale-105 transition duration-150"
            >
              Login
            </button>}

{/* Login */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-zinc-600 hover:scale-105 transition duration-150"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        
        </div> 

        {/* Navitems */}
        
        {/* dropDown Navitems */}

        {isMenuOpen && (
        
        <div className="md:hidden">
        
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              
   
              <div className="px-3 py-2">
        
                <div className="relative">
        
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
        
                    </svg>
        
                  </div>  
        
                  <input
        
        type="text"
        
        placeholder="Search for products..."
        
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"/>

                </div>

              </div>
 
              <button 
                onClick={() => {
                  router.push("/");
                  setIsMenuOpen(false);
                }}
                
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150">
                Shop
              </button>
     
              <button 
                onClick={() => {
                  router.push("/CtegorisPage");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150">
                Categories
              
              
            </button>
            
              <button 
                onClick={() => {
                  router.push("/Brands");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150">
                Brands
              </button>
              
              <button 
                onClick={() => {
                  router.push("/Wishlist");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150">
                Wishlist
              </button>


          { status === "loading" ? <Skeleton className=' w-16 h-6 bg-zinc-300'/> : status === "authenticated" ? 
          <button 
                onClick={() => signOut({ callbackUrl: "/Login"})}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150 sm:hidden">
                Logout
              </button>

          :   <button 
                onClick={() => {
                  router.push("/Login");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-zinc-600 hover:bg-gray-50 rounded-md font-medium hover:scale-105 transition duration-150 sm:hidden">
                Login
              </button>}


            </div>
          </div>
        )}
        
 {/* dropDown Navitems */}

      </div>
    </nav>
  )
}

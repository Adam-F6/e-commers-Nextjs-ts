'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import CategoryCard from './card/page';


export interface ICategory {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export default function CtegorisPage() {

  const [cate, setCate] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories' , {
  cache: "force-cache"
})
        const data = await res.json();
        setCate(data.data);

      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className='bg-white py-32 px-8 w-full'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48 animate-pulse"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
return(
<div className=' overflow-x-hidden'>
    <div className=' bg-amber-50 xl:px-16 md:px-8 px-2 py-16 xl:py-24'> 
        <div className=' text-5xl text-center text-amber-900 my-6'>Our Categories</div>
      <div className=' flex xl:py-8 xl:px-6 xl:pt-16 xl:mx-4 md:py-4 md:px-3 md:pt-8 md:mx-2 m-0 p-2 gap-4 flex-wrap'>
        
{cate.map((p:ICategory) => (
  <CategoryCard
key={p._id}
cate = {p}
/>))}
  </div>

    </div>
  </div>
  )

}

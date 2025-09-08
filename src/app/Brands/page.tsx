'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card/page';





export interface IProduct {
    sold:            number;
    images:          string[];
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    slug:            string;
    description:     string;
    quantity:        number;
    price:           number;
    imageCover:      string;
    category:        Brand;
    brand:           string;
    ratingsAverage:  number;     
    createdAt:       string;
    updatedAt:       string;
    id:              string;
}

export interface Brand {
    sold:            number;
    images:          string[];
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    slug:            string;
    description:     string;
    quantity:        number;
    price:           number;
    imageCover:      string;
    category:        Brand;
    brand:           string;
    ratingsAverage:  number;     
    createdAt:       string;
    updatedAt:       string;
    id:              string;
}





export default function Shop() {


  const [product, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {


const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands' , {
  cache: "force-cache"
})
        const data = await res.json();
        setProduct(data.data);

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
          {[...Array(18)].map((_, i) => (
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



  return (
<div className=' overflow-x-hidden bg-amber-50'>
<div className=' mt-16'>
  <div className=' text-center py-8 pb-4 text-5xl text-cyan-900'>Our Brands</div>
</div>
    <div className=' bg-amber-50 py-8 pt-0 px-8 w-full'>
  
    <div className=' flex flex-wrap'>
{product.map((p:IProduct) => (
  <Card
key={p._id}
product = {p}
brand = {p.brand}
/>))}

    </div>
    
    </div>
    
    </div>
  )

}

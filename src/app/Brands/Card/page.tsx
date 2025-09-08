'use client'
import { useRouter } from 'next/navigation';
import React from 'react'



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
    brand:           Brand;
    ratingsAverage:  number;
    createdAt:       string;
    updatedAt:       string;
    id:              string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}




export default function Card( {product , brand} : {product : IProduct , brand:Brand}) {


const id = product._id

  const router = useRouter()

        const handleNavigate = (id: string) => {
            router.push(`/Brands` , { scroll: false });
          };

  return (
   
<div className=' xl:w-1/5 w-1/2 md:w-1/3 p-3'>
<div className="card shadow-sm w-full bg-violet-50 text-black border-zinc-500">
  <figure className=' m-2.5'>
    <img
      src = {product.image}
      alt= {product.slug} 
      />
      
  </figure>

 
</div>
</div>

  )
}

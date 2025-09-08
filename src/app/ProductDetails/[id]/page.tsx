'use client'
import React from "react";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Brand, IProduct } from "@/app/Shop/ProductCard/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from 'next/image';
import { useCart } from "@/app/Context/cartContext";
import { addItemTocart } from "@/lib/servises/cart";
import { toast } from "sonner";
import { addToWishList } from "@/lib/servises/Wish";


interface ProductDetailsProps {
  params: {
    id: string;
  };
}




  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  };





export default function ProductDetails({ params }: ProductDetailsProps) {




    const {getCartData} = useCart()
              const add = async () => {
      await addItemTocart(product?._id)
   toast.promise(  getCartData(),{
    loading:"Adding ... . ."
    ,success:"adding done"
    ,error:"pleas try again"
   })
    }




  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${params.id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-96 w-full rounded-2xl bg-white/50" />
              <div className="flex space-x-2">
                <Skeleton className="h-20 w-20 rounded-lg bg-white/50" />
                <Skeleton className="h-20 w-20 rounded-lg bg-white/50" />
                <Skeleton className="h-20 w-20 rounded-lg bg-white/50" />
              </div>
            </div>
            
            {/* Content Skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4 bg-white/50" />
              <Skeleton className="h-6 w-1/2 bg-white/50" />
              <Skeleton className="h-4 w-full bg-white/50" />
              <Skeleton className="h-4 w-5/6 bg-white/50" />
              <Skeleton className="h-4 w-4/6 bg-white/50" />
              <div className="flex space-x-4">
                <Skeleton className="h-12 w-32 bg-white/50 rounded-lg" />
                <Skeleton className="h-12 w-32 bg-white/50 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pt-32 pb-16">



      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            

            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative group">
               


 <div className="relative w-96 ">

      <Slider {...settings}>

        <div className="relative overflow-x-hidden">
          <div className="relative overflow-hidden">
            <img
              src={product?.imageCover}
              alt="image"
              className="object-cover"
              width={400}
            />

          </div>
        </div>
        <div className="relative overflow-x-hidden">
          <div className="relative overflow-hidden">
            <img
              src={product?.images[0]}
              alt="image"
              className="object-cover"
              width={400}
            />

          </div>
        </div>
        <div className="relative overflow-x-hidden">
          <div className="relative overflow-hidden">
            <img
              src={product?.images[1]}
              alt="image"
              className="object-cover"
              width={400}
            />

          </div>
        </div>
{product?.images?.[2] && (
  <div className="relative overflow-x-hidden">
    <div className="relative overflow-hidden">
      <img
        src={product.images[2]}
        alt="image"
        className="object-cover"
        width={400}
      />
    </div>
  </div>
)}

{product?.images?.[3] && (
  <div className="relative overflow-x-hidden">
    <div className="relative overflow-hidden">
      <img
        src={product.images[3]}
        alt="image"
        className="object-cover"
        width={400}
      />
    </div>
  </div>
)}
        
  
      </Slider>

    </div>
              </div>
              
     

            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{product?.title}</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Brand: {product?.brand?.name}</span>
                  <span>/</span>
                  <span>Category: {product?.category?.name}</span>
                </div>
              </div>




              {/* Price */}




              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-amber-600">{product?.price} EGP</span>
                <div className="flex items-center space-x-1 bg-amber-400 text-green-700 px-3 py-1 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>{product?.ratingsAverage}</span>
                </div>
              </div>




              {/* Rating and Sales */}
              <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z"/>
                    </svg>
                    <span className="font-medium">{product?.ratingsAverage}</span>
                    <span className="text-gray-500">({product?.ratingsQuantity} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Sold</div>
                  <div className="font-bold text-green-600">{product?.sold} units</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => add()} className=" cursor-pointer flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                            
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className=' cursor-pointer'><path d="M16.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM8.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM4.84 3.94l-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H6.27c-.1-.44-.3-.86-.61-1.21-.5-.53-1.2-.84-1.92-.84H2c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84ZM20.51 8.75H5.17c-.42 0-.76.32-.8.73l-.36 4.35A2.922 2.922 0 0 0 6.92 17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 0 0-.79-.85Z" fill="#555555"></path></svg>
       
                  <span>Add to Cart</span>
                </button>
                <button onClick = {() => addToWishList(product._id)} className="cursor-pointer flex-1 bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-6 rounded-xl border-2 border-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Add to Wishlist</span>
                </button>
              </div>

              {/* Description */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product?.description}</p>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">{product?.quantity}</div>
                  <div className="text-sm text-gray-600">In Stock</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{product?.sold}</div>
                  <div className="text-sm text-gray-600">Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


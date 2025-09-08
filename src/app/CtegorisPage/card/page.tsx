
    'use client'
    import React from 'react'
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { ICategory } from '../page'
import { useRouter } from 'next/navigation';





      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      };




export default function CategoryCard({cate} : {cate : ICategory}) {

const router = useRouter()
      const handleNavigate = (id: string) => {
          router.push(`/Category/${id}` , { scroll: false });
        };
      


      return (
      

<div 
onClick={()=>{handleNavigate(cate._id)} }
className= 'xl:w-1/6 md:w-1/6 w-1/4 text-center text-black cursor-pointer mx-auto'>

          
      <img className='rounded-2xl object-cover aspect-square'
          src = {cate.image}
        alt= {cate.name}
        width={200}
        height={200}
           />

      
        <span>{cate.name}</span>
</div>



      );

}

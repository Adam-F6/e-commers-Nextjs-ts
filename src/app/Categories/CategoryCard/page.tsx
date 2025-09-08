
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




export default function CategoryCard({Cate} : {Cate : ICategory}) {

const router = useRouter()
      const handleNavigate = (id: string) => {
          router.push(`/Category/${id}` , { scroll: false });
        };
      


      return (
      

<div 

onClick={()=>{handleNavigate(Cate._id)} }


className= 'xl:w-1/12 w-1/6 text-center text-black cursor-pointer mx-auto'>
        <div {...settings}>
          
      <img className='rounded-2xl object-cover aspect-square'
          src = {Cate.image}
        alt= {Cate.name}
        width={200}
        height={200}
           />

        </div>
        <span>{Cate.name}</span>
</div>



      );

}

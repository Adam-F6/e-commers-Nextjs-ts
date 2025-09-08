
import { useCart } from '@/app/Context/cartContext';
import { addItemTocart } from '@/lib/servises/cart';
import { addToWishList } from '@/lib/servises/Wish';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';




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




export default function ProductCard( {product , brand} : {product : IProduct , brand:Brand}) {


const { getCartData } = useCart();

const add = async () => {
  await addItemTocart(product._id);
  toast.promise(
    
    async () => await getCartData(),
    {
      loading: "Adding ...",
      success: "Item added successfully",
      error: "Please try again",
    }
  );
};

          
     
 
const id = product?._id
  const router = useRouter()
  


  //            const addWISH = async () => {
  //                await addToWishList(id)
  //   toast.promise(  
  //      getUserWishlist(),
  //  {
  //   loading:"Adding ... . ."
  //   ,success:"adding done"
  //   ,error:"pleas try again"

  //  })
  // }





        const handleNavigate = (id: string) => {
            router.push(`/ProductDetails/${id}` , { scroll: false });
          };




  return (
   
<div className='  xl:w-1/5 sm:w-1/3 w-1/2 p-3'>
<div className="card shadow-sm w-full bg-zinc-100 text-black border-zinc-500">
  <figure className=' m-2.5 mb-0'>
    <img
      src = {product.imageCover}
      alt= {product.slug} />
  </figure>
  <div className="card-body" >
   <div onClick={()=>{handleNavigate(id)} }> 
    
    <h2 className="card-title overflow-hidden whitespace-nowrap cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">
      {product.title}

    </h2>
</div>
    <div className="card-actions justify-end">
      <div className="bg-transparent w-full text-green-500">{brand?.name}</div>

      <div className=' mr-auto'>{product?.price} EGP</div>
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
  <span className="text-sm font-medium">{product?.ratingsAverage}</span>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-yellow-400" 
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
</div>

    </div>
  </div>

<div className=' flex row-auto'>
<button 

onClick={add}

className="grow btn btn-neutral rounded-full m-2 mt-0 hover:scale-105 transition duration-300 hover:bg-zinc-800">add to cart</button>


<button onClick = {() => addToWishList(product._id)} className="w-10 h-10 btn bg-red-50 rounded-full p-0 hover:bg-cyan-50 hover:scale-110 transition duration-300 ">
   <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>

         </button>
</div>

</div>
</div>

  )
}

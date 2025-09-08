import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner';
import { rmoveCartItem , addItemTocart } from '@/lib/servises/cart';
import {  useCart } from '@/app/Context/cartContext';
import { totalmem } from 'os';


interface CartItemProps {
  item: {
    _id: string;
    product: {
      _id: string;
      title: string;
      imageCover: string;
      price: string;
    };
    quantity: string;
    color: string;
    size: string;
  };
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItem({ item }: CartItemProps) {




  const {getCartData} = useCart()
              const add = async () => {
      await addItemTocart(item?.product._id)
   toast.promise(  getCartData(),{
    loading:"Adding ... . ."
    ,success:"adding done"
    ,error:"pleas try again"
   })
    }




const removeItem = async () => {
 await rmoveCartItem(item?.product?._id)
await getCartData()
  toast.success('item removed')

}
  
 




console.log(item)
  return (
    <div className="bg-emerald-50 w-full rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 my-3 relative">
      <div className="flex flex-row gap-4 sm:gap-6">
        <div className="mx-auto sm:mx-0">
          <img
            src={item.product.imageCover}
            alt={item.product.title}
            className="w-32 h-32 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover bg-gray-100"
          />
        </div>

        <div className="flex-1 space-y-3 flex sm:flex-row flex-col mt-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900">
                {item.product.title}
              </h3>
              <div className="text-sm text-gray-500 mt-1 space-y-1 mt-2">
                <p>Price: <span className="text-gray-700">{item.price}</span></p>
                <p>ratingsAverage: <span className="text-gray-700">{item.product.ratingsAverage}</span></p>
              </div>
            </div>
<div className=' absolute z-10 top-3 right-5'>
            <button
              onClick={() => removeItem(item.product._id)}
              className="cursor-pointer p-2 hover:bg-red-50 rounded-lg transition-colors group ml-auto "
              aria-label="Remove item"
            >
              <Trash2 className="w-5 h-5 text-red-500 group-hover:text-red-600" />
            </button>
</div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ml-auto">
         
            
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-1 py-1 w-fit">
              <button
                 onClick={() => removeItem(item.product._id)}
                className="cursor-pointer w-10 h-10 rounded-full bg-white hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center  font-semibold text-lg">
                {item?.count}
                
              </span>
              <button
                onClick={() => add()}
                className="cursor-pointer w-10 h-10 rounded-full bg-white hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

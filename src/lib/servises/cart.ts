
import { getUserToken } from './../serverutilits';
import { redirect } from 'next/navigation';



export async function getUserCart () {

    const token = await getUserToken()
const respons = await fetch('https://ecommerce.routemisr.com/api/v1/cart' ,{
   cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!respons.ok) {
    throw new Error(`HTTP Error! status ${respons.status} `)   
}
const result = await respons.json()
return result
}

 

export async function rmoveCartItem (id:string) {

    const token = await getUserToken()
const respons = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{
    method:"DELETE",
   cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!respons.ok) {
    throw Error(`HTTP Error! status ${respons.status} `)   
}
const result = await respons.json()
return result
}


export async function addItemTocart (id:string) {

    const token = await getUserToken()

 if (token!= null || false || undefined) {
    
 
const Response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/` ,{
    method:"POST",
        body:JSON.stringify({
productId : id
})
   ,cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!Response.ok) {
    throw Error(`HTTP Error! status ${Response.status} `)   
}
const result = await Response.json()
return result
}
return error
}



export async function rmoveAllCartItems () {

    const token = await getUserToken()
const respons = await fetch(`https://ecommerce.routemisr.com/api/v1/cart` ,{
    method:"DELETE",
   cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!respons.ok) {
    throw Error(`HTTP Error! status ${respons.status} `)   
}
const result = await respons.json()
return result
}


export async function checkOut (cartId:string , formData:any) {


    const token = await getUserToken()

 
const Response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,{
    method:"POST",
        body:JSON.stringify({formData})
   ,cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!Response.ok) {
    throw (`HTTP Error! status ${Response.status} `)   
}
const result = await Response.json()

return result

}








export async function checkOutVisa (cartId:string , formData:any) {

    const token = await getUserToken()

 
const Response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXT_PUBLIC_REDIRECT_URL}` ,{
    method:"POST",
        body:JSON.stringify({formData})
   ,cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!Response.ok) {
    throw (`HTTP Error! status ${Response.status} `)   
}

const result = await Response.json()
redirect(result.session.url)

return result
}







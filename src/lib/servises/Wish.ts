import { getUserToken } from "@/lib/serverutilits"





export async function addToWishList (id:string) {

    const token = await getUserToken()

 if (token!= null || false || undefined) {
 
const Response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
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








export async function getUserWishlist () {

    const token = await getUserToken()
const respons = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist' ,{
   cache: "no-store" , headers:
    {token
,"Content-Type":"application/json"
,
    }, })
if (!respons.ok) {
    throw new Error(`HTTP Error! status ${respons.status} `)   
}
const result = await respons.json()
console.log(result)
return result

}








export async function rmoveWishListItem (id:string) {

    const token = await getUserToken()
const respons = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` ,{
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




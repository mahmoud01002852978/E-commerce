import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext = createContext();

export default function CartContextProvider(props){

let headers = {token : localStorage.getItem("userToken")}
const [cId ,setcId]= useState (0)
const [Ni ,setNi]= useState (null)
useEffect(()=>{
  addLoggedUserCar();

},[])


 function addProductToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, 
    {productId} ,   {headers})
    .then((res) => {setNi(res.data.numOfCartItems) 
      return res;
    })
    .catch((err) => err);
  };
  function checkout(cartId ,url ,formData){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {shippingAddress : formData} ,{headers})
    .then((res) => {return res

      
    })
    .catch((err) => err);
  };
 

async function addLoggedUserCar(){
   return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
    .then((res) => { 
      setcId(res.data.data._id);
      return res})
    .catch((err) => err
  )
     
}

function updateCartProduct(productId,newCount){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {count : newCount} ,{headers})
  .then((res) => res)
    .catch((err) => err)
}
function removeProduct(productId){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,{headers})
  .then((res) => res)
    .catch((err) => err)
}


return<CartContext.Provider value={{removeProduct,updateCartProduct, checkout, addProductToCart, cId, Ni ,addLoggedUserCar}}>
    {props.children}
</CartContext.Provider>
}
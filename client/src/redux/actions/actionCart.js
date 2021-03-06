import axios from 'axios'
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from '../actionTypes/actionTypeCart'

 export const addToCart=(_id,qty)=>async(dispatch,getState)=>{
const {data}=await axios.get(`/products/api/product/${_id}`)
dispatch({
    type:CARD_ADD_ITEM,
    payload:{
        product:data._id,
        nameproduct:data.nameproduct,
        avatar:data.avatar,
        price:data.price,
        countInStock:data.countInStock,
        qty
    }
})
// localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }
 export const removeFromCart=(id)=>(dispatch,getState)=>{
     dispatch({
         type:CARD_REMOVE_ITEM,
         payload:id
     }
     )
    //  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }
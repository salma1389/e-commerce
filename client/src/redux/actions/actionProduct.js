
    import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, GET_ONE_PRODUCT, GET_ONE_PRODUCT_FAIL, GET_ONE_PRODUCT_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS } from "../actionTypes/actionTypeProduct";
    
  
    // get all products
    export const productGet = () => async (dispatch) => {
      dispatch({ type: GET_ALL_PRODUCTS });
      try {
        const res = await axios.get("/products/api/products");
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: GET_ALL_PRODUCTS_FAIL,
          payload: error.response.data,
        });
      }
    };
    
    // get one product
    export const oneproductGet = (_id) => async (dispatch) => {
      dispatch({ type: GET_ONE_PRODUCT });
      try {
        const res = await axios.get(`/products/api/product/${_id}`);
        dispatch({
          type: GET_ONE_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: GET_ONE_PRODUCT_FAIL,
          payload: error.response.data,
        });
      }
    };
  
    // add one product
    export const addproduct = (newproduct) => async (dispatch) => {
      dispatch({ type: ADD_PRODUCT });
      try {
        const res = await axios.post("/products/api/createproducts",newproduct);
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: ADD_PRODUCT_FAIL,
          payload: error.response.data,
        });
      }
    };
  
     // update product
     export const updateproduct = (product) => async (dispatch) => {
      dispatch({ type: UPDATE_PRODUCT});
      try {
        const res = await axios.put(`/products/api/product/${product._id}`,product);
       
        dispatch({
         
          type: UPDATE_PRODUCT_SUCCESS,
          payload: res.data.nameproduct,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_PRODUCT_FAIL,
          payload: error.response.data,
        });
      }
    };
  
    // delete product
    export const deleteproduct = (_id) => async (dispatch) => {
      dispatch({ type: DELETE_PRODUCT });
      try {
        const res = await axios.delete(`/products/api/product/${_id}`);
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: error.response.data,
        });
      }
    };
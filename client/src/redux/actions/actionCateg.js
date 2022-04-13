import {
  ADD_CATEGORY,
    ADD_CATEGORY_FAIL,
    ADD_CATEGORY_SUCCESS,
    DELETE_CATEGORY,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    GET_CATEGORY,
    GET_CATEGORY_FAIL,
    GET_CATEGORY_SUCCESS,
    GET_ONE_CATEGORY,
    GET_ONE_CATEGORY_FAIL,
    GET_ONE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_SUCCESS,
  } from "../actionTypes/actionTypeCateg";
  import axios from "axios";
  

  // get all categorys
  export const categGet = () => async (dispatch) => {
    dispatch({ type: GET_CATEGORY });
    try {
      const res = await axios.get("/categorys/api/categorys");
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  // get one category
  export const onecategGet = (_id) => async (dispatch) => {
    dispatch({ type: GET_ONE_CATEGORY });
    try {
      const res = await axios.get(`/categorys/api/category/:${_id}`);
      dispatch({
        type: GET_ONE_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ONE_CATEGORY_FAIL,
        payload: error.response.data,
      });
    }
  };

  // add one category
  export const addcateg = (newcateg) => async (dispatch) => {
    dispatch({ type: ADD_CATEGORY });
    try {
      const res = await axios.post("/categorys/api/createcategory",newcateg);
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CATEGORY_FAIL,
        payload: error.response.data,
      });
    }
  };

   // update category
   export const updatecateg = (categ) => async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY });
    try {
      const res = await axios.put(`/categorys/api/category/:${categ._id}`,categ);
      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORY_FAIL,
        payload: error.response.data,
      });
    }
  };

  // delete category
  export const deletecateg = (_id) => async (dispatch) => {
    dispatch({ type: DELETE_CATEGORY });
    try {
      const res = await axios.delete(`/categorys/api/category/:${_id}`);
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_FAIL,
        payload: error.response.data,
      });
    }
  };
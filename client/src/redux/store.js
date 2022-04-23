// import { userReducer } from "./reducers/reducerUser";
// import { categReducer } from "./reducers/reducerCateg";
// import { productReducer } from "./reducers/reducerProduct";
// import { cartReducer  } from "./reducers/reducerCart";

// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const cartItemsFromStorage=localStorage.getItem('cartItems')
// ?JSON.parse(localStorage.getItem('cartItems')):[]

// const devtools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//   const initialState={
//     cart:{cartItems:cartItemsFromStorage},
  
// }

// export const store = createStore(
//   combineReducers({ userReducer, categReducer, productReducer ,cartReducer }),initialState,
//   compose(applyMiddleware(thunk), devtools)
// );

import { userReducer } from "./reducers/reducerUser";
import { categReducer } from "./reducers/reducerCateg";
import { productReducer } from "./reducers/reducerProduct";
import { cartReducer  } from "./reducers/reducerCart";
import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const cartItemsFromStorage=localStorage.getItem('cartItems')
?JSON.parse(localStorage.getItem('cartItems')):[]

const initialState={
      cart:{cartItems:cartItemsFromStorage},
    
  }

const persistConfig = {
    key: 'auth',
    storage:storage,
  }

  const persistedReducer = persistReducer(persistConfig, combineReducers({userReducer,categReducer,productReducer,cartReducer}),initialState)
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(persistedReducer,compose(applyMiddleware(thunk),devtools))

export const  persistor = persistStore(store)
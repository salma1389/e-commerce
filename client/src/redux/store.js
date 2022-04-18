import { userReducer } from "./reducers/reducerUser";
import { categReducer } from "./reducers/reducerCateg";
import { productReducer } from "./reducers/reducerProduct";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  combineReducers({ userReducer, categReducer, productReducer }),
  compose(applyMiddleware(thunk), devtools)
);

// import { userReducer } from "./reducers/reducerUser";
// import { categReducer } from "./reducers/reducerCateg";
// import { productReducer } from "./reducers/reducerProduct";
// import {createStore,combineReducers,compose,applyMiddleware} from "redux";
// import thunk from "redux-thunk"

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, combineReducers({userReducer,categReducer,productReducer}))
// const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// export const store=createStore(persistedReducer,compose(applyMiddleware(thunk),devtools))

// export const  persistor = persistStore(store)
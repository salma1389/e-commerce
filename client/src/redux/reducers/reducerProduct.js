import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, GET_ONE_PRODUCT, GET_ONE_PRODUCT_FAIL, GET_ONE_PRODUCT_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS } from "../actionTypes/actionTypeProduct";


const init = {
  product:null,
 
  loading: false,
  
  
};

export const productReducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET_ALL_PRODUCTS:
            case GET_ONE_PRODUCT:
                case ADD_PRODUCT:
                    case UPDATE_PRODUCT:
                      case DELETE_PRODUCT:
                        
            return{
                ...state,loading:true
            }

            case GET_ALL_PRODUCTS_FAIL:
                case GET_ONE_PRODUCT_FAIL:
                    case ADD_PRODUCT_FAIL:
                        case UPDATE_PRODUCT_FAIL:
                           case DELETE_PRODUCT_FAIL:
                   
                return{
                    ...state,loading:false,error:payload
                };

                case GET_ALL_PRODUCTS_SUCCESS:
                    case GET_ONE_PRODUCT_SUCCESS:
                        return{
                            ...state,loading:false,product:payload
                        };
                        case ADD_PRODUCT_SUCCESS:
                            return{
                                ...state,loading:false,product:[...state.product,payload]
                            }

                      
                  
        
            case UPDATE_PRODUCT_SUCCESS:
                           
                return{
                    ...state, product:state.product.map( el => el._id === payload._id ?payload :el),loading:false
                };
                case DELETE_PRODUCT_SUCCESS:
                    return{
                        ...state, product:state.product.filter(el => el._id != payload),loading:false
                     };            
                   
    
        default:
            return state
    }
}
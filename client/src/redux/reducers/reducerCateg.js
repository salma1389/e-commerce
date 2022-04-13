import { ADD_CATEGORY, ADD_CATEGORY_FAIL, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_SUCCESS, GET_CATEGORY, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS, GET_ONE_CATEGORY, GET_ONE_CATEGORY_FAIL, GET_ONE_CATEGORY_SUCCESS, UPDATE_CATEGORY, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_SUCCESS } from "../actionTypes/actionTypeCateg";


const init = {
  category: null,
  error: null,
  loading: false,
  
};

export const categReducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET_CATEGORY:
            case GET_ONE_CATEGORY:
                case ADD_CATEGORY:
                    case UPDATE_CATEGORY:
                      case DELETE_CATEGORY:
                        
            return{
                ...state,loading:true
            }

            case GET_CATEGORY_FAIL:
                case GET_ONE_CATEGORY_FAIL:
                    case ADD_CATEGORY_FAIL:
                        case UPDATE_CATEGORY_FAIL:
                           case DELETE_CATEGORY_FAIL:
                   
                return{
                    ...state,loading:false,error:payload
                };

                case GET_CATEGORY_SUCCESS:
                    case GET_ONE_CATEGORY_SUCCESS:
                        case ADD_CATEGORY_SUCCESS:
                    return{
                        ...state,loading:false,category:payload
                    };
        
            case UPDATE_CATEGORY_SUCCESS:
                           
                return{
                    ...state, category:state.category.map( el => el._id === payload._id ?payload :el)
                };
                case DELETE_CATEGORY_SUCCESS:
                    return{
                        ...state, category:state.category.filter(el => el._id !== payload)
                     };            
                   
    
        default:
            return state
    }
}
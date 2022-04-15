import {  GET_PROFIL, GET_PROFIL_FAIL, GET_PROFIL_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "../actionTypes/actionTypeUser";

const init = {
  user: null,
  error: null,
  loading: false,
  token:localStorage.getItem("token"),
  isAuth:false
  
};

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case SIGN_UP:
            case LOGIN:
                case GET_PROFIL:
            return{
                ...state,loading:true
            }
            case SIGN_UP_FAIL:
                case LOGIN_FAIL:
                    case GET_PROFIL_FAIL:
                return{
                    ...state,loading:false,error:payload
                };
                case SIGN_UP_SUCCESS:
                    return{
                        ...state,loading:false,user:payload.user, token:payload.token, isAuth:true
                    };
                // case SIGN_UP_SUCCESS:
                case LOGIN_SUCCESS:
                    return {
                        ...state,loading:false, error:null, user:payload.user, token:payload.token, isAuth:true
                    }

                    case GET_PROFIL_SUCCESS:
                        return{
                            ...state,loading:false,error:null,user:payload
                        }
                        case LOGOUT:
                            return{
                                state
                            }
        default:
            return state
    }
}
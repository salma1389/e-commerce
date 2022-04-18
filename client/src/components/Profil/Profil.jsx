import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfil } from '../../redux/actions/actionUser';

const Profil = () => {
    const {user,loading}=useSelector(state=>state.userReducer)
    // console.log(user)
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(userGetProfil())
    }, [])
    
  return (
    <div>{
        loading?<h1>Loading ... </h1>:<div>{user&&<h1>{user.fullName}</h1>}</div>}</div>
  )
}

export default Profil
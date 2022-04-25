import React, { useState } from "react";
import './Login.css';
import {Form,Button} from "react-bootstrap"
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin} from "../../redux/actions/actionUser";


const Login = () => {
const {loading}=useSelector(state=>state.userReducer)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(userLogin({email,password}))
    }
  return (
    <div  className="container">
      <div className="wrappper">
      
      {loading ? (
        <h1>Loading...</h1>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/profil" />
      ) : (<Form onSubmit={handleSubmit}>
           <h2>ENTER YOUR ACCOUNT</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  value={password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <h3>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></h3>
        </Form.Group>
        <Button className="btn" variant="primary" type="submit">
          Login
        </Button>
      </Form>
       ) }
  
      </div>
    </div>
  );
};

export default Login;
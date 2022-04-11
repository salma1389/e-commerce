import React, { useState } from "react";
import './SignUp.css';
import {Form,Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../redux/actions";
const SignUp = () => {
const {loading}=useSelector(state=>state)
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(userSignUp({fullName,email,password}))
    }
  return (
    <div  className="container">
      <div className="wrapper">
      
      {
          loading?<h1>Loading...</h1>:<Form onSubmit={handleSubmit}>
           <h1>CREATE AN ACCOUNT</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full name" value={fullName} onChange={e=>setFullName(e.target.value)} />
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
          Create
        </Button>
      </Form>
      }
      <Link to="/login"><p>Do you have an account  already ?
        <br/>
        Go to Login
      </p></Link>
      </div>
    </div>
  );
};

export default SignUp;
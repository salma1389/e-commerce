// import { Send } from "@material-ui/icons";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userSignUp } from "../redux/actions/actionUser";


const Containner = styled.div`
margin-top:9vh;
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height:4vh;
  width:5vw;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUp({ email }));
  };
  return (
    <Containner onSubmit={handleSubmit}>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input
         placeholder="Your email" 
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
    
    <Link to="/SignUp">
        <Button>
     send
        </Button>
        </Link>
      </InputContainer>
    </Containner>
  );
};

export default Newsletter;

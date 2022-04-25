import React, { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";
// import {SendIcon} from "'@mui/icons-material'";
// import {SendIcon} from "@mui/material/icons"
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/actions/actionUser";
import CategoryListKids from "../Categorys/CategoryListKids";
import CategorysList from "../Categorys/CategorysList";
import Slider from "../slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />

      <h2>Please find here our Categories</h2>
      <CategorysList />
    </div>
  );
};

export default Home;

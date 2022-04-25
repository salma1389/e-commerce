import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { oneproductGet } from "../../redux/actions/actionProduct";
import "./DetailProduct.css";
import styled from "styled-components";
import { addToCart } from "../../redux/actions/actionCart";

const FilterContainer = styled.div`
  width: 80%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const DetailProduct = () => {
  //reducer state
  const { product } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
// console.log(product.color)
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(oneproductGet(_id));
  }, []);

  return (
    <div className="container1">
      <div className="ImgContainer">
        <Card.Img className="image" src={product.avatar} alt="Card image" />
      </div>
      <div className="wrapper">
        <h1 className="title">{product.nameproduct}</h1>

        
          <h4> {product.description} </h4>
          
        
          <div className="span">
        <h3 className="price"> {product.price} </h3>
        <h2> $ </h2>
        </div>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            {/* {
      product&& React.Children.toArray(product.color.map((x) => <FilterColor color= "x" />))
    
         } */}
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
           
              {/* {
      product.size.map( el =>  <FilterSizeOption> {el} </FilterSizeOption>)
        
            } */}
            {/* <FilterSizeOption>{product.size}</FilterSizeOption> */}
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <div>
        {user && user.roles == "user" ? (
          <Button style={{"width":"8vw","marginLeft":"4vw","marginTop":"15vh"}} onClick={() => dispatch(addToCart(product._id, 1))}>
            Add To Cart
          </Button>
        ) : (
          <Link to="/login">
             <Button style={{"width":"8vw","marginLeft":"4vw","marginTop":"15vh"}} onClick={() => dispatch(addToCart(product._id, 1))}> Add To Cart</Button>
            {/* <button onClick={() => dispatch(addToCart(product._id, 1))}>
              Add To Cart
            </button> */}
          </Link>
        )}
      </div>
      </div>
    </div>
  );
};

export default DetailProduct;

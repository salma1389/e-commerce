import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../../redux/actions/actionCart";
import Navbarr from "../Navbar/Navbarr";
// import Message from '../components/Message'

const CartScreen = ({ location, history }) => {
  // const productId=match.params.id
  const { _id } = useParams();

  // const qty=location.search?Number(location.search.split('=')[1]):1
  const qty = 1;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  // const {cartItems}=cart
  useEffect(() => {
    if (_id) {
      dispatch(addToCart(_id, qty));
    }
  }, []);
  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };
  //    const checkoutHandler=()=>{
  //     history.push('/login?redirect=shipping')
  //    }

 
  return (
    <>
    
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <h2>
              Your Cart is empty<Link to="/">Go Back</Link>
            </h2>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                      style={{"height":"15vh"}}
                        src={item.avatar}
                        alt={item.nameproduct}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3} style={{"marginTop":"8vh"}}>
                      <Link to={`/product/${item.product}`}>
                        {item.nameproduct}
                      </Link>
                    </Col>
                    <Col md={2} style={{"marginTop":"8vh"}}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                      style={{"marginTop":"8vh"}}
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2} style={{"marginTop":"8vh"}}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        </Row>
       
          <Card style={{"marginLeft":"70vw","marginTop":"-50vh","width":"20vw","height":"25vw"}}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  )items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                    // onClick={checkoutHandler}
                >
                  Proceed To Chekout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
     
      
    </>
  );
};

export default CartScreen;

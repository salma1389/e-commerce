import React, { useEffect } from "react";
import "./Navbarr.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { ShoppingCartOutlined } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userGetProfil, userLogOut } from "../../redux/actions/actionUser";




const Navbarr = () => {
  const { loading, user } = useSelector((state) => state.userReducer);
  //  console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetProfil());
  }, [dispatch]);

  return (
    <div>
      <Navbar className="navb" expand="lg">
        <Container fluid>
          <Navbar.Brand > <img style={{"width":'100px'}} src="/logo.jpg" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{ color: "rgb(243, 241, 238)" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "rgb(243, 241, 238)" }}
                href="/products"
              >
                Products
              </Nav.Link>
              <NavDropdown
                title="Categories"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/men">Men</NavDropdown.Item>
                <NavDropdown.Item href="/women">Women</NavDropdown.Item>
                <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {user ? (
                user && (
                  <div className="d-flex">
                    <Nav.Link className="nameMenu" href="/profil">
                      {user.fullName}
                    </Nav.Link>
                    <Nav.Link
                      className="nameMenu"
                      onClick={() => dispatch(userLogOut())}
                    >
                      LogOut
                    </Nav.Link>
                  </div>
                )
              ) : (
                <div className="d-flex">
                  <Nav.Link className="nameMenu" href="/signUp">
                    SignUp
                  </Nav.Link>
                  <Nav.Link className="nameMenu" href="/login">
                    Login
                  </Nav.Link>
                </div>
              )}
              <div className="btnCartCount">
                <div className="count">0</div>

                {user ? (
                  <Nav.Link className="nameMenu" href="/cart">
                    {" "}
                    <i className="fas fa-shopping-cart"></i>{" "}
                  </Nav.Link>
                ) : (
                  <Nav.Link className="nameMenu" href="/login">
                    {" "}
                    <i className="fas fa-shopping-cart"></i>{" "}
                  </Nav.Link>
                )}
              </div>
              {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;

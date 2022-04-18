import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import "./Cart.css";
import { addToCart, removeFromCart } from "../../redux/actions/actionCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems} = useSelector((state) => state.cartReducer);

  const quantityChangeHandler = (_id, qty) => {
    dispatch(addToCart(_id, qty));
  };
  const deleteProduct = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Panier</h2>
        {cartItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              item={item}
              quantityChangeHandler={quantityChangeHandler}
              deleteProduct={deleteProduct}
            />
          ))
        )}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p> Product Total ({getCartCount()}) </p>
          <p> Total : ({getCartTotal()}) TND </p>
        </div>
        <div>
          <Link to="/products">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
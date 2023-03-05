import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <header>
        <div className="logoContainer">Mini Shop</div>
        <div className="offerContainer">SALE SALE SALE</div>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="cart">
            Cart
          </Link>
          <Link className="navLink" to="wishlist">
            Wishlist
          </Link>
          <Link className="navLink" to="signUp/logIn">
            SignUp/LogIn
          </Link>
        </nav>
      </header>
    </>
  );
};

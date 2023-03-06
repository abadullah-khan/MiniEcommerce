import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Store,Slices/Store";
import { Nav } from "./Components/Nav/Nav";
import { Error } from "./Components/Pages/Error/Error";
import { Home } from "./Components/Pages/Home/Home";
import { Wishlist } from "./Components/Pages/Wislist/Wishlist";
import { Cart } from "./Components/Pages/Cart/Cart";

import "./Styles/MiniEcommRdx.scss";
import "./Styles/Nav.scss";
import "./Styles/Carousel.scss";
import "./Styles/TheCollection.scss";
import "./Styles/Cart.scss";
import "./Styles/Bill.scss";
import "./Styles/SignUp.scss";
import "./Styles/LogIn.scss";
import "./Styles/Wishlist.scss";
import "./Styles/Media.scss";
import { SignUp } from "./Components/Pages/Login.Signup/SignUp";
export const MiniEcommRdx = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signUp/logIn" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incQuantity,
  decQuantity,
  changeQuantity,
} from "../../../Store,Slices/CartSlice";
import Image from "../../Assets/images/1.jpg";

export const Cart = () => {
  const { cart, formData } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  const totalTypesOfProducts = cart.length;
  const totalQuantityOfProducts = cart
    .map((e) => e.quantity)
    .reduce((acc, value) => acc + value, 0);
  let totalCost = cart
    .map((e) => e.quantity * e.price)
    .reduce((acc, value) => acc + value, 0);
  const discount = 50;
  totalCost = totalCost - discount;
  const tax = 18;
  const gotTax = (totalCost / 100) * tax;
  totalCost = (totalCost + gotTax).toFixed(2);

  return (
    <>
      {formData.name !== "none" ? (
        <div className="cart">
          {cart.length ? (
            <div className="cardWrapper">
              {cart.map((e) => {
                const { id, img, title, desc, price, quantity } = e;
                return (
                  <div className="card" key={id}>
                    <div className="imgContainer">
                      <img src={img} alt={title} />
                    </div>
                    <div className="aboutProduct">
                      <div className="details">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <div className="priceContainer">
                          at Rs. <span>{price}/-</span>
                        </div>
                      </div>
                      <div className="btnContainer">
                        <button onClick={() => dispatch(removeFromCart(id))}>
                          Remove
                        </button>
                        <div className="incDecContainer">
                          <button onClick={() => dispatch(incQuantity(id))}>
                            <Add />
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            onChange={(event) =>
                              dispatch(changeQuantity({ event, e }))
                            }
                          />
                          {quantity > 1 ? (
                            <button onClick={() => dispatch(decQuantity(id))}>
                              <Remove />
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="emptyCart">
              <h3>You have'nt added any product in your cart</h3>
              <button>
                <Link to="/">Go to home page</Link>
              </button>
            </div>
          )}
          <div className="bill">
            <div className="card">
              <div className="details">
                <div className="imgContainer">
                  <img
                    src={formData.userImg ? formData.userImg : Image}
                    alt=""
                  />
                </div>
                <div className="userDetails">
                  <p>Name :</p>
                  <span>{formData.name}</span>

                  <p>Email :</p>
                  <span>{formData.email}</span>

                  <p>Contact :</p>
                  <span>{formData.contact}</span>
                </div>
                <div className="billDetails">
                  <p>Types of products :</p>
                  <span>{totalTypesOfProducts}</span>

                  <p>Total products :</p>
                  <span>{totalQuantityOfProducts}</span>

                  <p>Discount :</p>
                  <span>{cart.length ? discount : 0}$</span>

                  <p>tax :</p>
                  <span>{cart.length ? tax : 0}%</span>
                </div>
              </div>
              <div className="totalContainer">
                <hr />
                <div className="totalCost">
                  <p>Total cost :</p>
                  <span>{cart.length ? totalCost : "null"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="notSignedUp">
          <h3>You have'nt signedIn</h3>
          <div className="btnContainer">
            <Link className="link" to="/">
              <button>Go to home page</button>
            </Link>
            <Link className="link" to="/signUp/logIn">
              <button>Go to signUp page</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

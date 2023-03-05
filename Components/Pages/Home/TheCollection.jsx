import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, addToWishlist } from "../../../Store,Slices/CartSlice";

export const TheCollection = () => {
  const { items } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  return (
    <>
      <div className="collection_container">
        <div className="cardWrapper">
          {items.map((e) => {
            const { id, img, title, desc, price } = e;
            return (
              <div className="card" key={id}>
                <div className="imgContainer">
                  <img src={img} alt={title} />
                </div>
                <div className="details">
                  <div className="aboutProduct">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="priceContainer">
                      At Rs. <span>{price}/-</span>
                    </div>
                  </div>
                  <div className="btnContainer">
                    <button onClick={() => dispatch(addToCart(e))}>
                      Add to Cart
                    </button>
                    <button onClick={() => dispatch(addToWishlist(e))}>
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { removeFromWishlist, addToCart } from "../../../Store,Slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";

export const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.allCart);
  console.log(wishlist);
  const dispatch = useDispatch();
  return (
    <>
      {wishlist.length ? (
        <div className="wishlist">
          {wishlist.map((e) => {
            const { id, img, title, desc, price } = e;
            return (
              <div className="card" key={id}>
                <div className="imgContainer">
                  <img src={img} alt={title} />
                </div>
                <div className="details">
                  <div className="aboutProduct">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div className="priceContainer">
                      at Rs. <span>{price}/-</span>
                    </div>
                  </div>
                  <div className="btnContainer">
                    <button onClick={() => dispatch(removeFromWishlist(id))}>
                      Remove
                    </button>
                    <button onClick={() => dispatch(addToCart(e))}>
                      Add o Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="emptyWishlist">
          <h3>You have'nt added any product in your wishlist</h3>
          <Link className="link" to="/">
            <button>Go back to home page</button>
          </Link>
        </div>
      )}
    </>
  );
};

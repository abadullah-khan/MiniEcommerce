import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../../Store,Slices/CartSlice";

export const TheCarousel = () => {
  const { items } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={1500}
        showArrows={false}
        showStatus={false}
      >
        {items
          .filter((i) => i.id < 6)
          .map((e) => {
            const { id, img, title, desc, price } = e;
            return (
              <div className="carousel_container" key={id}>
                <div className="img_container">
                  <img src={img} alt={title} />
                </div>
                <div className="details">
                  <div className="aboutProduct">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className="priceContainer">
                      At Rs:
                      <span>{price}/-</span>
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
              </div>
            );
          })}
      </Carousel>
    </>
  );
};

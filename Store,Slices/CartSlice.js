import { createSlice } from "@reduxjs/toolkit";
import { Assets } from "../Components/Assets/Asset";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    wishlist: [],
    items: Assets,
    // totalQuantity: 0,
    // totalPrice: 0,
    // isPresent: null,
    formToggle: true,
    formInput: {},
    formData: {
      userImg: "",
      name: "none",
      email: "none",
      password: "null",
      contact: "xxxxxxxx",
    },
  },
  reducers: {
    addToCart(state, action) {
      const { cart } = state;
      const isPresent = cart.findIndex((i) => i.id === action.payload.id);
      if (isPresent >= 0) {
        // state = cart.map((e) =>  {
        // e.id === action.payload.id ? { ...e, quantity: e.quantity + 1 } : e
        //   if (e.id === action.payload.id) {
        //     return { ...e, quantity: e.quantity + 1 };
        //   }
        //   return e;
        // });
        state.cart[isPresent].quantity += 1;
      } else {
        // state.cart = [...cart, { ...action.payload, quantity: 1 }];
        state = cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((i) => {
        return i.id !== action.payload;
      });
    },
    addToWishlist(state, action) {
      const { wishlist } = state;
      const isPresent = wishlist.findIndex((e) => e.id === action.payload.id);
      if (isPresent >= 0) {
        return;
      } else {
        state = wishlist.push(action.payload);
      }
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((i) => {
        return i.id !== action.payload;
      });
    },
    incQuantity(state, action) {
      // state.cart.map((e) => {
      //   return e.id === action.payload ? { ...e, quantity: e.quantity + 1 } : e;
      // });
      const isPresent = state.cart.findIndex((i) => i.id === action.payload);
      state.cart[isPresent].quantity += 1;
    },
    decQuantity(state, action) {
      const isPresent = state.cart.findIndex((i) => i.id === action.payload);
      state.cart[isPresent].quantity -= 1;
    },
    changeQuantity(state, action) {
      const { event, e } = action.payload;
      const isPresent = state.cart.findIndex((i) => i.id === e.id);
      state.cart[isPresent].quantity = parseInt(event.target.value);
    },
    handleFormToggle(state) {
      state.formToggle = !state.formToggle;
    },
    handleFormChange(state, action) {
      state.formInput[action.payload.key] = action.payload.value;
    },
    handleFormSubmit(state, action) {
      action.payload.preventDefault();
      state.formData = { ...state.formInput };
      alert(`form submitted Welcome ${state.formInput.name}`);
      state.formInput.userImg = "";
      state.formInput.name = "";
      state.formInput.email = "";
      state.formInput.password = "";
      state.formInput.contact = "";
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  incQuantity,
  decQuantity,
  changeQuantity,
  handleFormToggle,
  handleFormChange,
  handleFormSubmit,
} = CartSlice.actions;

export default CartSlice.reducer;

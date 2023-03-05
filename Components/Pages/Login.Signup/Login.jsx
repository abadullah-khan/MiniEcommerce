import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleFormChange,
  handleFormSubmit,
  handleFormToggle,
} from "../../../Store,Slices/CartSlice";

export const Login = () => {
  const { formInput } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="logIn">
        <div className="card">
          <form onSubmit={(e) => dispatch(handleFormSubmit(e))}>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formInput.name || ""}
              onChange={(event) =>
                dispatch(
                  handleFormChange({
                    key: event.target.name,
                    value: event.target.value,
                  })
                )
              }
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formInput.email || ""}
              onChange={(event) =>
                dispatch(
                  handleFormChange({
                    key: event.target.name,
                    value: event.target.value,
                  })
                )
              }
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formInput.password || ""}
              onChange={(event) =>
                dispatch(
                  handleFormChange({
                    key: event.target.name,
                    value: event.target.value,
                  })
                )
              }
            />
            <div className="btnContainer">
              <button type="submit">LogIn</button>
              <p>
                Don't have account ? Click on{" "}
                <button onClick={() => dispatch(handleFormToggle())}>
                  SignUp
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

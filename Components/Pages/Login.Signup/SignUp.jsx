import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleFormChange,
  handleFormSubmit,
  handleFormToggle,
} from "../../../Store,Slices/CartSlice";
import { Login } from "./Login";

export const SignUp = () => {
  const { formInput, formToggle } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  return (
    <>
      {formToggle ? (
        <div className="signUp">
          <div className="card">
            <form onSubmit={(event) => dispatch(handleFormSubmit(event))}>
              <div className="imgContainer">
                <input
                  type="file"
                  name="userImg"
                  accept="Image/*"
                  value={formInput.userImg || ""}
                  onChange={(e) =>
                    dispatch(
                      handleFormChange({
                        key: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="inputDetails">
                <label htmlFor="name">User name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formInput.name || ""}
                  onChange={(e) =>
                    dispatch(
                      handleFormChange({
                        key: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your @email"
                  required
                  value={formInput.email || ""}
                  onChange={(e) =>
                    dispatch(
                      handleFormChange({
                        key: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label htmlFor="contact">Contact</label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Enter your number"
                  required
                  value={formInput.contact || ""}
                  onChange={(e) =>
                    dispatch(
                      handleFormChange({
                        key: e.target.name,
                        value: e.target.value,
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
                  onChange={(e) =>
                    dispatch(
                      handleFormChange({
                        key: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="btnContainer">
                <button type="submit">SignIn</button>
                <p>
                  Already have an account ? Click on
                  <button onClick={() => dispatch(handleFormToggle())}>
                    LogIn
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

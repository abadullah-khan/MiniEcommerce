import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <h1>This page doesn't exist.</h1>
        <p>You'll be reconnected to home page in 2 seconds .</p>
      </div>
    </>
  );
};

import React from "react";
import { TheCarousel } from "./TheCarousel";
import { TheCollection } from "./TheCollection";

export const Home = () => {
  return (
    <>
      <main>
        <TheCarousel />
        <TheCollection />
      </main>
    </>
  );
};

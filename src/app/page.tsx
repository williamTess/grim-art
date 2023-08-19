"use client";
import {
  CategoryContext,
  CategoryContextType,
} from "@/context/categories.context";
import React from "react";

const HomePage = () => {
  const { categories } = React.useContext(
    CategoryContext
  ) as CategoryContextType;

  return <div>{categories.map((c) => JSON.stringify(c))}</div>;
};

export default HomePage;

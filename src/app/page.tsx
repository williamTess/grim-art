"use client";
import { DataContext, DataContextType } from "@/context/app.context";
import React from "react";
import FullCardImage from "../../components/FullCardImage";
import { styled } from "@mui/material";

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "40px 10px",
}));

const Cards = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  gap: 25,
}));

const HomePage = () => {
  const { categories } = React.useContext(DataContext) as DataContextType;

  return (
    <Container>
      <Cards>
        {categories.map((c) => (
          <FullCardImage key={c.id} category={c} />
        ))}
      </Cards>
    </Container>
  );
};

export default HomePage;

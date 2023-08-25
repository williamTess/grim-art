"use client";
import { color } from "@/style/color";
import { Typography, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

export const Drawer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 20,
  width: "18%",
  height: "100%",
  backgroundColor: "white",
  gap: 10,
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
}));

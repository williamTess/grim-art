"use client";
import { styled } from "@mui/material";
import Background from "../../public/wallaper.jpg";

export const Bar = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  padding: "10px 0",
  justifyContent: "space-between",
  width: "98%",
  borderRadius: 10,
  margin: 15,
  boxSizing: "border-box",
  background:
    "linear-gradient(to right, rgba(79, 1, 71, 0.5), rgba(79, 1, 71, 0.5))",
  [theme.breakpoints.down("sm")]: {
    width: "91%",
  },
}));

export const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "60%",
  marginLeft: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export const ConnectContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
}));

export const UserContainer = styled("div")(() => ({
  display: "flex",
  marginRight: 10,
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  height: "80vh",
  width: "100vw",
  backgroundSize: "cover",
  backgroundImage: `url(${Background.src})`,
  overflow: "scroll",

  [theme.breakpoints.up("sm")]: {
    backgroundPosition: "center",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "contain",
    height: "38vh",
    width: "100vw",
  },
  [theme.breakpoints.down(400)]: {
    backgroundSize: "contain",
    height: "25vh",
  },
}));

export const Image = styled("img")(() => ({
  objectFit: "cover",
}));

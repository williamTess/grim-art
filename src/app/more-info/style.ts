"use client";
import { color } from "@/style/color";
import { Typography, styled } from "@mui/material";
import ProfilePicture from "../../../public/profil.png";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  marginTop: "-480px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "-200px",
  },
  [theme.breakpoints.down(400)]: {
    marginTop: "-100px",
  },
}));

export const ContainerProfile = styled("div")(({ theme }) => ({
  display: "flex",
  height: "50vh",
  width: "85%",
  background: color.beige,
  borderRadius: 10,
  padding: 25,
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "30%",

  background: `url(${ProfilePicture.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.down("sm")]: {
    height: "50%",
    width: "100%",
  },
}));
export const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "60%",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

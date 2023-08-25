"use client";
import { color } from "@/style/color";
import { Typography, styled } from "@mui/material";

export const FooterContainer = styled("div")(() => ({
  display: "flex",
  height: "100%",
  width: "100%",
  backgroundColor: "black",
  color: color.grey,
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "50px 40px",
  width: "35%",

  [theme.breakpoints.down("md")]: {
    margin: "10px 40px",
    width: "50%",
    textAlign: "center",
  },
}));

export const Title = styled(Typography)(() => ({
  marginBottom: 20,
  color: color.greyLight,
  letterSpacing: ".2rem",
}));

export const List = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Socials = styled("div")(({ theme }) => ({
  display: "flex",
  borderTop: ".2rem solid",
  marginTop: 10,
  paddingTop: 10,
  gap: 10,

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

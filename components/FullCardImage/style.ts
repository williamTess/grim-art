"use client";
import { color } from "@/style/color";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps {
  image: any;
  [key: string]: any;
}

export const Card = styled("div")((props: CardProps) => ({
  position: "relative",
  width: "30%",
  height: 480,
  transition: "0.5s",
  borderRadius: 5,
  color: "white",

  backgroundImage: `linear-gradient(to bottom, ${color.greyShadow}, ${color.grey}), url(${props.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  "&:hover": {
    backgroundImage: `linear-gradient(to bottom, ${color.greyShadow}, ${color.greyLight}), url(${props.image})`,
  },

  [props.theme.breakpoints.down("md")]: {
    width: "45%",
  },
  [props.theme.breakpoints.down("sm")]: {
    width: "90%",
    height: 150,
  },
}));

export const Content = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  margin: "20px 0",
  textAlign: "center",
  padding: 10,
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    margin: "5px 0",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: 5,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginBottom: 30,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 10,
  },
}));

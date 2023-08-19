import { Button } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  variant?: "outlined" | "contained";
}

const StyledButton = (props: Props) => {
  const {
    text,
    size = "medium",
    color = "primary",
    variant = "outlined",
  } = props;
  return (
    <Button size={size} color={color} variant={variant}>
      {text}
    </Button>
  );
};

export default StyledButton;

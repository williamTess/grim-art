"use client";
import { SignUp } from "@clerk/nextjs";
import { styled } from "@mui/material";

const SignUpContainer = styled("div")(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export default function Page() {
  return (
    <SignUpContainer>
      <SignUp />
    </SignUpContainer>
  );
}

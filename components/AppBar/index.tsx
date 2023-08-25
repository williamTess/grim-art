import * as React from "react";
import SearchText from "../search";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Link } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import {
  Bar,
  ConnectContainer,
  SearchContainer,
  UserContainer,
  ImageContainer,
  StyledIconButton,
} from "./style";

export const SearchBar = () => {
  return (
    <>
      <Bar>
        <SearchContainer>
          <SearchText />
        </SearchContainer>
        <ConnectContainer>
          <SignedIn>
            <Link href={"/more-info"}>
              <StyledIconButton style={{ color: "#ffffff" }}>
                <InfoIcon fontSize="large" />
              </StyledIconButton>
            </Link>
            <UserContainer>
              <UserButton afterSignOutUrl="/" />
            </UserContainer>
          </SignedIn>
          <SignedOut>
            <Link href={"/more-info"}>
              <StyledIconButton style={{ color: "#ffffff" }}>
                <InfoIcon fontSize="large" />
              </StyledIconButton>
            </Link>
            <Link href={"/sign-in"}>
              <StyledIconButton style={{ color: "#ffffff" }}>
                <AccountCircleIcon fontSize="large" />
              </StyledIconButton>
            </Link>
          </SignedOut>
        </ConnectContainer>
      </Bar>
      <ImageContainer></ImageContainer>
    </>
  );
};

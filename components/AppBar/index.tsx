import * as React from "react";
import SearchText from "../search";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { IconButton, Link } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import {
  Bar,
  ConnectContainer,
  SearchContainer,
  UserContainer,
  ImageContainer,
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
              <IconButton style={{ color: "#ffffff", padding: 0 }}>
                <InfoIcon fontSize="large" />
              </IconButton>
            </Link>
            <UserContainer>
              <UserButton afterSignOutUrl="/" />
            </UserContainer>
          </SignedIn>
          <SignedOut>
            <Link href={"/more-info"}>
              <IconButton style={{ color: "#ffffff", padding: 0 }}>
                <InfoIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link href={"/sign-in"}>
              <IconButton style={{ color: "#ffffff", padding: 0 }}>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Link>
          </SignedOut>
        </ConnectContainer>
      </Bar>
      <ImageContainer></ImageContainer>
    </>
  );
};

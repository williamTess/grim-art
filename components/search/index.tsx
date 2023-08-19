import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

export default function SearchText() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon style={{ color: "#ffffff" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        style={{ color: "#ffffff" }}
      />
    </Search>
  );
}

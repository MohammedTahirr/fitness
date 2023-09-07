import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import AppLogo from "../../assets/AppLogo.png";

const Header = ({ onInput, placeholder }) => {
  return (
    <AppBar className="appbar-style" position="static">
      <Toolbar>
        <div className="secContainer">
          <a href="/">
            <img className="appLogo" src={AppLogo} />
          </a>
          <div className="searchBar">
            <SearchIcon className="search-icon" />
            <InputBase
              placeholder={placeholder}
              inputProps={{ "aria-label": "search" }}
              onInput={onInput}
            />
          </div>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

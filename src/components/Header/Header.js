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
    <AppBar position="static">
      <Toolbar>
        <div className="secContainer">
          <Typography variant="h6">
            <a href="/">
              <img className="appLogo" src={AppLogo} />
            </a>
          </Typography>
          <div className="searchBar">
            <SearchIcon />
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

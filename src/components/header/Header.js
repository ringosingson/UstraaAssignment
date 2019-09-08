import React from "react";
import AppBar from "material-ui/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "white"
  }
});

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar title="Ustraa" className={classes.color}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <ShoppingCart />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </AppBar>

      <h4>Our Products</h4>
    </>
  );
}

export default Header;

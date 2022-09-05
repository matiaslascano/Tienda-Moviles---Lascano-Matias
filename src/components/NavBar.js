import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbarLeft">
        <NavLink className="navbarLink" to="/">
          TM LASCANO
        </NavLink>
        <NavLink className="navbarLink" to="/category/alta">
          GAMA ALTA
        </NavLink>
        <NavLink className="navbarLink" to="/category/media">
          GAMA MEDIA
        </NavLink>
        <NavLink className="navbarLink" to="/category/baja">
          GAMA BAJA
        </NavLink>
      </ul>
      <div className="navbarRight">
        <ShoppingCartIcon className="navbarCart" alt="cart" />
        <AccountCircleIcon className="navbarUser" alt="user" fontSize="large" />
      </div>
    </div>
  );
};

export default NavBar;

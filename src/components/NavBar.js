import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const { totalProductos } = useCartContext();
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
        <CartWidget />

        <AccountCircleIcon className="navbarUser" alt="user" fontSize="large" />
      </div>
    </div>
  );
};

export default NavBar;

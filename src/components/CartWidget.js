import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";

const CartWidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <>
      <Link to="/cart">
        <IconButton>
          <ShoppingCartIcon className="cartIcon" />
        </IconButton>
      </Link>
      <span>{totalProductos() || ""}</span>
    </>
  );
};

export default CartWidget;

import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const CartWidget = () => {
  return (
    <IconButton>
        <ShoppingCartIcon className='cartIcon'/>
    </IconButton>
    
  )
}

export default CartWidget
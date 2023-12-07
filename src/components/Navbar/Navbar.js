import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { dataContext } from "../Context/DataContext";

import TotalItem from "../CartContent/TotalItem";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
   <div className='nav-container'>
    <nav className='navbar'> 
      <Link to={"/"}>
     <h1 className='navbar-logo'>Carrito de compras</h1>
     </Link>
      <Link className='seeCarrito' to={"/cart"}>
        🛒 
        {cart.length > 0 ? <TotalItem /> : null}
      </Link>
    </nav>
   </div>
  );
};

export default Navbar;
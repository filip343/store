import Account from "./Account";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import Categories from "./Categories";
import logo from '../assets/imgs/menu/Logo.png'
import { Link } from "react-router-dom";

function Menu() 
{
  return(<nav className="Menu">
    <Link to={`/`} className="logo" ><img className='Menu_logo' src={logo} alt=''/></Link>
    <Categories/>
    <Searchbar/>
    <Cart/>
    <Account/>

  </nav>)
}

export default Menu;
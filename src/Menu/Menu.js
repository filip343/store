import Account from "./Account";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import Categories from "./Categories";
import './menu.css'


function Menu() 
{
  return(<div className="Menu">
    <img className='logo' src='images/menu/Logo.png' alt=''/>
    <Categories/>
    <Searchbar/>
    <div className="right">
      <Cart/>
      <Account/>
    </div>
  </div>)
}

export default Menu;
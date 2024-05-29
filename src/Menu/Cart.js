import { Link } from 'react-router-dom';
import cartIm from '../assets/imgs/menu/cart.png';
import CartProd from './CartProd';
import { useState } from 'react';


function Cart(){
  const [listVisibility, setListVisibility] = useState(false);
  const [numOfShown,setNumOfShown] = useState(3);
  const changeToVisible= ()=>{   
    setListVisibility(true);
  }
  const changeToHidden=()=>{
    setListVisibility(false);
    setNumOfShown(3);
  }
  var cart = [];
  cart = JSON.parse(localStorage.getItem('cart'));
  return(<Link className="Menu_Cart" onMouseOver={changeToVisible} onMouseLeave={changeToHidden} to={'/cart'}>
    <div id="img"><img src={cartIm} alt='cart'/></div>
    <div className={'Menu_List' + (!listVisibility?' hide':'')} onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
      {cart.length!==0?
        cart.map((elem,i)=>{
          if(i<numOfShown){
            return <CartProd elem={elem}/>
          }else if(cart.length>numOfShown&&i===cart.length-1){
            return<div className="showMore" onClick={()=>{setNumOfShown(numOfShown+3)}}>
              . . .
            </div>
          }
          return<></>;

          
        }):
        <div className='emptyCart'>
          You don't have any items in the cart
        </div>
      }
    </div>
  </Link>);
}

export default Cart;
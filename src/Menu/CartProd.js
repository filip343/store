import { Link } from "react-router-dom";
import binImg from "../assets/imgs/menu/bin.png";

const CartProd = (props) => {
  const {elem} = props
  const handleButtonClick=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    removeFromCart()
  }
  const removeFromCart = ()=>{
    const cart = JSON.parse(localStorage.getItem("cart"));
    var cartNew = cart.filter((el)=>{
      if(el._id===elem._id)return false;
      return true;
    })
    localStorage.setItem("cart",JSON.stringify(cartNew));
  }
  return <Link className="cartProd" to={`http://localhost:3000/product/${elem._id}`} >
  <div className='name'>{elem.quantity} x {elem.name}</div>
  <div className='pricePerOne'>price: ${elem.price}</div> 
  <div className='priceTotal'>total: ${Math.floor(elem.price*elem.quantity*100)/100}</div> 
  <button className="remove" onClick={(e)=>handleButtonClick(e)}><img src={binImg}/></button>
</Link>;
}
 
export default CartProd;
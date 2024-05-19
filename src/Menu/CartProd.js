import { Link } from "react-router-dom";

const CartProd = (props) => {
  const {elem} = props

  return <Link className="cartProd" to={`http://localhost:3000/product/${elem._id}`} >
  <div className='name'>{elem.quantity} x {elem.name}</div>
  <div className='price'>${Math.floor(elem.price*elem.quantity*100)/100}</div> 
</Link>;
}
 
export default CartProd;
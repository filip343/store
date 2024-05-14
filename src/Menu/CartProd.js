
const CartProd = (props) => {
  const {elem} = props

  return <div className="cartProd">
  <div className='name'>{elem.quantity} x {elem.name}</div>
  <div className='price'>${Math.floor(elem.price*elem.quantity*100)/100}</div> 
</div>;
}
 
export default CartProd;
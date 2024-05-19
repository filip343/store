import {useState } from "react";
import { auth } from "../firebase/firebase";

export function BuyUI(params){

  const {prodId,available,price,name} = params;
  const [quantity,setQuantity] = useState(1);
  const handleOnChange = (e)=>{
    e.preventDefault();
    changeQuantity(e);
    if(e.target.value==="")
    {
      setQuantity(1);
    }
  }
  const changeQuantity=(e, direction=0)=>{
    var iqua = parseInt(quantity);
    var quantToSet=e===undefined?(iqua+ direction<1?quantity:iqua+direction): e.target.value;
    
    if(quantToSet>available)quantToSet=quantity;
    setQuantity(quantToSet);
    console.log(direction);
  }
  const preventInput = (evt)=>{
    var keys =["e","E","+","-",",",".","Enter"]
    if(evt.target.value.length===0){
      keys.push('0');
    }
    keys.includes(evt.key) && evt.preventDefault()
  }
  const addToCart = ()=>{
    var cart = JSON.parse(localStorage.getItem("cart")||"[]");
    var isInCart=false;
    cart.map(elem => {
      if(elem._id===prodId){
        isInCart=true;
        elem.quantity+=quantity;
      }
      return elem
    });
    if(!isInCart)cart.push({_id:prodId,name:name,price:price,quantity:quantity});
    localStorage.setItem("cart",JSON.stringify(cart));
    if(auth.currentUser){
      const options = {    method: "PATCH", 
      body:JSON.stringify({
        uid:JSON.parse(localStorage.getItem("userData")).uid,
        cart:JSON.parse(localStorage.getItem("cart"))
      }), 
      headers: {
        'Access-Control-Allow-Origin':"http://localhost:3000",
        "Content-Type": "application/json"
      }};
      fetch('http://localhost:8080/userCart',options)
    }
  }

  return(
  <div className="BuyUI">
    <div className="container">
      <label className="name">{name}</label>
      <div className="available">AVAILABLE: {available}</div>
      <div className="quantity">

        <button className="minus" onClick={(e)=>{e.preventDefault();changeQuantity(undefined,-1)}}> - </button>
        
        <input onKeyDown={(evt)=>preventInput(evt)} value={quantity} onChange={(e)=>{handleOnChange(e)}} type="number" min={1}/>

        <button className="plus" onClick={(e)=>{e.preventDefault();changeQuantity(undefined,1)}}> + </button>

      </div>
      <div className="price">
        <div className="perU">PER UNIT: ${price}</div>
        <div className="summary">{`SUMMARY: ${quantity} x $${price}`}</div>
        <div className="totalPrice">{`TOTAL PRICE: $${(price*quantity).toFixed(2)}`}</div>
      </div>
      <div className="buyBtns">
        <div className="buy">BUY</div>
        <div className="toCart" onClick={addToCart}>ADD TO CART</div>
      </div>
    </div>
  </div>
  
  );
}
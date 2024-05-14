import { Link } from "react-router-dom";
function Product(props){
  const obj = props.obj;

  return (<Link to={`/product/${props.id}`} className="Product">
    <div className="container">
      <img src={obj.img}/>
      <label className="Product_name">{obj.name}</label>
      <label className="Product_price">{obj.price}</label>
    </div>

  </Link>)
}

export default Product;
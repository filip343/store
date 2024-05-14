import { useState,useEffect } from "react";
import Product from "./Product";


function ProductsGrid(props){
  const {filter,cltT,srch} = props;

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  var [response,setResponse] = useState();

  useEffect(()=>{
    const options = {    method: "GET", 
    headers: {
      'Access-Control-Allow-Origin':"http://localhost:3000",
      "Content-Type": "application/json"
    }};
  
    fetch(`http://localhost:8080/products?srtT=${filter}&cltT=${cltT===null?"":cltT}&srch=${srch===null?"":srch}`,options).then((data)=>{
      
      return data.json();
  
    }).then(data=>{
      
      setResponse(data);
      
      
    }).catch((err)=>{console.log(err);});

  },[filter,cltT,srch])
  var numOfProd = [...Array(response===undefined?0:response.length).keys()];

  return (<div className="MainGrid_ProductsGrid">
    {numOfProd.map((id)=>{
      return <Product obj={response[id]} id={response[id]._id} />
    })}
  </div>)
}


export default ProductsGrid;
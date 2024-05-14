import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Categories(props){
  const [listVisibility, setListVisibility] = useState(false);
  

  const changeToVisible= ()=>{ 
    
    if(!listVisibility) {
      setListVisibility(true);
      
    } 
    
  }
  const changeToHidden=()=>{
    
    if(listVisibility) {
      setListVisibility(false);
    } 
  }
  var [response,setResponse] = useState();

  useEffect(()=>{
    const options = {    method: "GET", 
    headers: {
      'Access-Control-Allow-Origin':"http://localhost:3000",
      "Content-Type": "application/json"
    }};
  
    fetch('http://localhost:8080/categories',options).then((data)=>{
      return data.json();
  
    }).then(data=>{
      setResponse(data.categories);
      
      
    }).catch((err)=>{console.log(err);});

  },[])

  var len = response===undefined?0:response.length;
  var lenArr = [...Array(len).keys()];

  const [list,setList] = useState(new Array(0));

  useEffect(()=>{
    const list_ = new Array(0);
    lenArr.forEach((id)=>{
      const elem = response[id]
      list_.push(elem);     
      
    })
    setList(list_);
  },[response])
  return(
    <Link to={localStorage.getItem("isMedia")?"":'/products'} className="Menu_Products" onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
      <div className="label"><label>Products</label></div>
      
      <div className={'Menu_List ' + (!listVisibility?' hide':'')} >
      {list.map(elem=>{
        return (<div><Link to={`/products?cltT=${elem.replace('-','').slice(0,3)}&srch=`}>
          {elem}
        </Link></div>);
      })}
        
      </div>
    
    </Link>
  );
}


export default Categories;
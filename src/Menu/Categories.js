import { useState } from "react";


function Products(props){
  const [listVisibility, setListVisibility] = useState(false);
  

  const changeToVisible= ()=>{   
    setListVisibility(true);
  }
  const changeToHidden=()=>{
    setListVisibility(false);
  }
  var fr ={};
  const params = {
    method:"GET",
    password:"GE2DS!@$14",
    headers:{
      "Content-Type": "application/json"
    }
  };
  fetch('localhost:8080/categories',params).then((res)=>{
    fr=JSON.parse(res.body);
  }).catch((err)=>{
    console.log(err)
  });
  console.log(fr);
  
  return(
    <div className="Products" onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
      <label >Products</label>
      
      <div className={'List ' + (!listVisibility?' hide':'')} onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
        <div>sadf</div>
        <div>sdagdsg</div>
      </div>
    
    </div>
  );
}



export default Products;
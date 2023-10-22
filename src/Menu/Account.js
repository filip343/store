import { useState } from "react";



function Account(){

  const [listVisibility, setListVisibility] = useState(false);
  

  const changeToVisible= ()=>{   
    setListVisibility(true);
  }
  const changeToHidden=()=>{
    setListVisibility(false);
  }
  
  
  
  return(
    <div className="Account" onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
      <img src='images/AccountImg.png'/>
      
      <div className={'List' + (!listVisibility?' hide':'')} onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
        <li>Manage Account</li>
        <li>Buying History</li>
      </div>
    
    </div>
  );
}

export default Account;
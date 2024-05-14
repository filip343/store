import React from "react";

function Searchbar(){

  const PressedKey = (event)=>{
    if(event.key=== 'Enter'){
      window.location.href = `/products?cltT=&srch=${event.target.value}`;
    }
  }

  return(
  <div className="Menu_Searchbar">
    <input type="text" onKeyDown={(event)=>PressedKey(event)}></input>
  </div>
  );

}

export default Searchbar;
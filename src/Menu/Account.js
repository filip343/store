import { useEffect, useState } from "react";
import accountIm from '../assets/imgs/menu/AccountImg.png';
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { doSignOut } from "../firebase/auth";

function Account(){

  const [listVisibility, setListVisibility] = useState(false);
  const [isLogged,setIsLogged]=useState(null);
  const [authLoaded,setAuthLoaded] = useState(false)
  auth.onAuthStateChanged(user=>{
    setAuthLoaded(true)
    setIsLogged(user?true:false)
  })

  const changeToVisible= ()=>{   
    setListVisibility(true);
  }
  const changeToHidden=()=>{
    setListVisibility(false);
  }
  const signOut = ()=>{
    doSignOut();
  }
  
  
  return(
    <div className="Menu_Account" onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
      <div id="img"><img src={accountIm}/></div>
      
      <div className={'Menu_List' + (!listVisibility?' hide':'')} onMouseOver={changeToVisible} onMouseLeave={changeToHidden}>
        {authLoaded?(
          isLogged?
          <><div>Manage</div><div>History</div><div onClick={signOut}>Logout</div></>:
          <><Link to="sign/up"><div>Sign up</div></Link>
          <Link to="sign/in"><div>Sing in</div></Link></>  
        ):<></>
        }
      </div>
    </div>
  );
}

export default Account;
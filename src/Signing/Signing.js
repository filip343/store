import { useParams } from "react-router-dom";
import RegisterForm from "./Register";
import LoginForm from "./Login";
import { auth } from "../firebase/firebase";
import {useState} from 'react';



const Signing = () => {
  const type = useParams().type==='up'?true:false;
  const [isLogged,setIsLogged]= useState(auth.currentUser?true:false);
  const [authLoaded,setAuthLoaded] = useState(false)

  auth.onAuthStateChanged(user=>{
    setAuthLoaded(true);
    setIsLogged(user?true:false);
  })

  return<div className="signingComp">
    {authLoaded && (!isLogged ?(type?<RegisterForm /> : <LoginForm />) : (<div>You are already logged</div>))}  </div>;
}
 
export default Signing;
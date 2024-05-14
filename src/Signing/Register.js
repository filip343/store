import {doCreateUserWithEmailAndPassword} from '../firebase/auth';
import { useState } from 'react';

const RegisterForm = () => {

  const [password,setPassword]=useState("");
  const [activeLbl,setActiveLbl]=useState("");
  const [repPassword,setRepPassword] =useState("");
  const [email,setEmail]=useState("");
  const changeLabelFocus=()=>{
    setActiveLbl(document.activeElement.className);
  }
  const handleSignUpClick = ()=>{
    if(password===repPassword&&password.length>=6&&email!==""){
      doCreateUserWithEmailAndPassword(email,password);
    }else{
      setActiveLbl("all");
    }
  };


  return (<form className="register" onKeyDown={(e)=>{if(e.key==="Enter")handleSignUpClick()}}>
    <input type="text" className="email" placeholder="email adress" onFocus={changeLabelFocus} onChange={event=>{setEmail(event.target.value)}}/>

    {activeLbl==="all" && email===""?<label className='password'>{"This field cannot be empty"}</label>:""}

    <input type="password" className="password" placeholder="password" onFocus={changeLabelFocus} onChange={event=>{setPassword(event.target.value)}}/>

    {(activeLbl==="all"||activeLbl==="password")&&password.length<6?<label className='password'>{"Password must have at least 6 characters"}</label>:""}

    <input type="password" className="repPassword" onFocus={changeLabelFocus} placeholder="repeate password" onChange={event=>{setRepPassword(event.target.value)}}/>
    
    {(activeLbl==="all"||activeLbl==="repPassword")&&password!==repPassword?<label className='password'>{"Passwords must be the same"}</label>:""}

    <label className='repPassword'></label>
    <div type='submit' onClick={handleSignUpClick}>Sign Up</div>
  </form> );
}
 
export default RegisterForm;


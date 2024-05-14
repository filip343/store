import { useState } from 'react';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

const LoginForm = () => {
  const [password,setPassword]=useState("");
  const [activeLbl,setActiveLbl]=useState("");
  const [email,setEmail]=useState("");

  const handleSignInClick = ()=>{
    if(password!==""&&email!==""){
      doSignInWithEmailAndPassword(email,password);
    }else{
      setActiveLbl("all");
    }
  };


  return (<form className="login" onKeyDown={(e)=>{if(e.key==="Enter")handleSignInClick()}}>
    <input type="text" className="email" value={email} placeholder="email adress" onFocus={()=>setActiveLbl("")} onChange={event=>{setEmail(event.target.value)}}/>

    {activeLbl==="all" && email===""?<label className='password'>{"This field cannot be empty"}</label>:""}

    <input type="password" className="password" value={password} placeholder="password" onFocus={()=>setActiveLbl("")} onChange={event=>{setPassword(event.target.value)}}/>

    {activeLbl==="all"&& password===""?<label className='password'>{"This field cannot be empty"}</label>:""}

    <div type='submit' onClick={handleSignInClick}>Sign In</div>
  </form> );
}
 
export default LoginForm;
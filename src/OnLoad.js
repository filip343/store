import { useState } from "react";
import { initializeFirebase } from "./firebase/firebase";

const OnLoad = () => {
  const [auth,setAuth] = useState("")
  initializeFirebase().then((app,auth)=>{
    setAuth(auth)
  });
  return (<></>);
}
 
export default OnLoad;
export {auth}
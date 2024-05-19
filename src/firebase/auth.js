import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signInWithRedirect,GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import {auth} from './firebase'



const addUser = (uid)=>{
  const options = {    method: "POST", 
  body:JSON.stringify({
    uid:uid,
    cart:[]
  }), 
  headers: {
    'Access-Control-Allow-Origin':"http://localhost:3000",
    "Content-Type": "application/json"
  }};
  fetch('http://localhost:8080/user',options).then((res)=>{
    return res.json();

  }).then(res=>{
    localStorage.setItem('userData',JSON.stringify({_id:res.insertedId,cart:[],uid:uid}))
    localStorage.setItem("cart",JSON.stringify([]))
  }).catch((err)=>{console.log(JSON.parse(err));});

}
const getUserData = (uid)=>{
  const options = {    method: "GET", 
  headers: {
    'Access-Control-Allow-Origin':"http://localhost:3000",
    "Content-Type": "application/json"
  }};

  fetch(`http://localhost:8080/user/${uid}`,options).then((res)=>{
    return res.json();

  }).then(res=>{
    localStorage.setItem("userData",JSON.stringify(res));
    localStorage.setItem("cart",JSON.stringify(res.cart));
    
  }).catch((err)=>{
    console.log(err);
  });

}



export const doCreateUserWithEmailAndPassword=async(email,password)=>{
  
  createUserWithEmailAndPassword(auth,email,password)
  .then(res=>{
    addUser(res.user.uid);
    window.location.pathname="";
  })
  .catch(err=>{console.log(err.code)});//TODO:make error handling
}
export const doSignInWithEmailAndPassword=async(email,password)=>{
  signInWithEmailAndPassword(auth,email,password)
  .then((res)=>{
    getUserData(res.user.uid);
    window.location.pathname="";
  });
}

export const doSignInWithGoogle = async()=>{
  const provider = new GoogleAuthProvider();
  if(!localStorage.getItem('isMobile')){
    signInWithPopup(auth,provider)
    .then(result=>{
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      console.log(credentials);
      const token = credentials?.accessToken;


    }).catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credentials = GoogleAuthProvider.credentialFromError(error)
    })
  }else{
    signInWithRedirect(auth,provider);
    getRedirectResult(auth)
    .then(result=>{
      if(result){
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log(credentials);
        const token = credentials?.accessToken;

        const user = result.user;
      }
    }).catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credentials = GoogleAuthProvider.credentialFromError(error);
    })
  }
}

export const doSignOut=()=>{
  return auth.signOut().then(()=>{
    localStorage.setItem("userData",null);
    localStorage.setItem("cart",JSON.stringify([]));
  });
}
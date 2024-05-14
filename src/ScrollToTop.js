import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const {pathname} = useLocation();
  const event = new Event('pathChange');

  window.addEventListener('pathChange',()=>{  
    if(pathname!=='/'){
      document.querySelector(".App").scrollTo(0,0);
    }

  });
  useEffect(()=>{
    window.dispatchEvent(event);
  },[pathname])
}
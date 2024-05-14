import { useEffect,useState } from "react";
import FiltersBar from "./FiltersBar";
import ProductsGrid from "./ProductsGrid";
import { useLocation } from "react-router-dom";

function MainGrid(props){

  const searchParams = new URLSearchParams(useLocation().search);
  const {cltT,srch} = {cltT:searchParams.get('cltT'),srch:searchParams.get('srch')};


  useEffect(()=>{
    document.querySelector(".App").scrollTo(0,sessionStorage.getItem('scrolled'));
  },[])
  const [curFilter,setFilter] = useState('popD');
  return(<div className="MainGrid">
    <FiltersBar setFilter={setFilter}/>
    <ProductsGrid filter={curFilter} cltT={cltT} srch={srch}/>
  </div>)
}

export default MainGrid;
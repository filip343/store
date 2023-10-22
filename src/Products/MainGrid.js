import FiltersBar from "./FiltersBar";
import ProductsGrid from "./ProductsGrid";

function MainGrid(){
  return(<div className="mainGrid">
    <FiltersBar/>
    <ProductsGrid/>
  </div>)
}

export default MainGrid;
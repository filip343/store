import { useState } from "react";

function FiltersBar(){
  const filters = ["most popular","from cheapest","from most expensive"];
  const values = ["popular","cheap", "expensive"];

  const [curFilter,setFilter] = useState(filters[0]);

  function handleFilterChange(value){
    setFilter(value.target.value)
  }
  return(<div className="FiltersBar">
    <label htmlFor="filter_1">sorting</label>
    <select onChange={(value)=>{handleFilterChange(value)}} className="filter_1" id="filter_1">
      {filters.map((filter, id)=>{
        return (<option value={values[id]}>{filter}</option>)
      })}
    </select>

  </div>)
}

export default FiltersBar;
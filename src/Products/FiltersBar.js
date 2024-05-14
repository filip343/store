function FiltersBar(props){
  const {setFilter}=props;
  const filters = ["reccomended","price: ascending","price: descending"];
  const values = ["popD","prcA", "prcD"];

  

  function handleFilterChange(value){
    setFilter(value.target.value)
  }
  return(<div className="MainGrid_FiltersBar">
    <label htmlFor="filter_1">sorting</label>
    <select onChange={(value)=>{handleFilterChange(value)}} className="filter_1" id="filter_1">
      {filters.map((filter, id)=>{
        return (<option value={values[id]}>{filter}</option>)
      })}
    </select>

  </div>)
}

export default FiltersBar;

function Searchbar(){
  return(
  <div className="Searchbar">
    <input type="text" onKeyDown={(event)=>PressedKey(event.key)}></input>
  </div>
  );
  function PressedKey(key){
    if(key=== 'Enter'){
      //Wyszukiwanie w bazie danych
      console.log('wyszukiwanie');
    }
  }
}

export default Searchbar;
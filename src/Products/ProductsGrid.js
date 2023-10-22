function ProductsGrid(){
  

  getData();



  return (<div className="productsGrid">

  </div>)
}

function getData(){

  const options = {    method: "GET", 
  mode: "cors", 
  cache: "no-cache", 
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin':'http://localhost:3000',
    "Content-Type": "text/html",
    'Access-Control-Allow-Credentials':'true'
  }};

  fetch('http://localhost:8080/categories',options).then(async(data)=>{
  
    let json = await data.json()
    return json;
  })
    .then(async (data)=>{console.log(data)})
    .catch((err)=>{console.log(err);});

}



export default ProductsGrid;
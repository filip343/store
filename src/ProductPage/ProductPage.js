
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BuyUI } from './BuyUI';
import { ImgSlider } from '../ImgSlider/ImgSlider';


function ProductPage(){  
  const params = useParams();
  const {id} = params;
  var [response,setResponse] = useState();

  useEffect(()=>{
    const options = {    method: "GET", 
    headers: {
      'Access-Control-Allow-Origin':"http://localhost:3000",
      "Content-Type": "application/json"
    }};
    
    fetch(`http://localhost:8080/product/${id}`,options).then((data)=>{
      
      return data.json();
  
    }).then(data=>{
      
      setResponse(data);
      
      
    }).catch((err)=>{console.log(err);});

  },[params])

  const {_id,price,images,name,description,available} = response?response:{};

  if(!response){
    return <h1>Loading</h1>
  }
  return(<form className="ProductPage">
  <label className='ProductPage_name'>{name}</label>
  <div className="ProductPage_imgs"><ImgSlider imgs={images}/></div>
  <BuyUI prodId={_id} name={name} price={price} available={available}/>
  <div className='ProductPage_description'><label>DESCRIPTION</label>{description}</div>
</form>)


}


export default ProductPage;
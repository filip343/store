import { useState } from 'react';


export function ImgSlider(params) {
  const {imgs} = params;
  const [active,setActive]=useState(0);
  function changeImg(direction){
    console.log(active);
    if(direction===-1 )//&& imgs[active]!==imgs[imgs.length-1])
    {
      setActive(active+1);
    }else if(direction===1 )//&& imgs[active]!==imgs[0])
    {
      setActive(active-1);
    }
    console.log(active);
  }
  return (
      <div className='slider'>
        <div className='right' onClick={()=>{changeImg(1)}}></div>
        <div className='left' onClick={()=>{changeImg(-1)}}></div>
        {
          imgs.map((el,id)=>{
            const classNm =active-id<0?'p'+Math.abs(active-id):'o'+(active-id);
            return <div className={`img ${classNm}`}><img src={imgs[id]}/></div>
          })
        }
      </div>
  );
}



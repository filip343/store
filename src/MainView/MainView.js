import arrLeft from '../assets/imgs/arrow-left.png';
import arrRight from '../assets/imgs/arrow-right.png';
import news from '../assets/imgs/news/0.png'

function MainView(){

  return(
    <div className="MainView">     
    <img className="MainView_background" src={news}/>
    <button className="MainView_arrow left"><img src={arrLeft}/></button>
    <button className="MainView_arrow right"><img src={arrRight}/></button>
    </div>
  );
}
export default MainView;
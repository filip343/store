import './App.scss';
import Home from './Home';
import Menu from './Menu/Menu';
import ProductPage from './ProductPage/ProductPage';
import MainGrid from './Products/MainGrid';
import { Route,Routes} from 'react-router-dom';
import Signing from './Signing/Signing';


function App() {
  
  function scrolled(){
    const {pathname} = window.location;
    if(pathname==='/'){
      sessionStorage.setItem('scrolled',document.querySelector(".App").scrollTop);

    }
  }
  function loaded(){
    document.querySelector(".App").addEventListener('scroll',scrolled);
  }
  var isMobile;
  if(!window.matchMedia){
    isMobile=true;
  }else{
    isMobile=false;
  }//TODO: repair
  localStorage.setItem("isMobile", isMobile);

  return (<div className='App' onLoad={loaded}>
    <Menu/>
    <Routes>
      <Route path ='/' element={<Home/>}/>      
      <Route path ='/product/:id' element={<ProductPage/>}/>
      <Route path='/sign/:type' element={<Signing/>}/>      
      <Route path='/products' element={<MainGrid/>}/>
    </Routes>
  </div>


  );
}

export default App;

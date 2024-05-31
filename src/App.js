import './App.scss';
import Home from './Home';
import Menu from './Menu/Menu';
import ProductPage from './ProductPage/ProductPage';
import MainGrid from './Products/MainGrid';
import { Route,Routes} from 'react-router-dom';
import Signing from './Signing/Signing';
import CartPage from './CartPage/CartPage';


function App() {
  
  const scrolled = ()=>{
    const {pathname} = window.location;
    if(pathname==='/'){
      sessionStorage.setItem('scrolled',document.querySelector(".App").scrollTop);
    }
  }

  const loaded= ()=>{
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
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  </div>


  );
}

export default App;

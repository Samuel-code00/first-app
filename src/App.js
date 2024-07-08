import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Category from './Pages/Categorypage';
import Product from './Pages/ProductPage';
import Carts from './Pages/Cart';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/cart' element={<Carts/>}/>

      
    </Routes>
  );
}

export default App;

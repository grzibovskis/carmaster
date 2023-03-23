import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<ProductList/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/login' element={<Login/> }/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

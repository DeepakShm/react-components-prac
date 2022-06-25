import { useState } from 'react';
import CartContext from './Context/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Layout/Footer';
import Header from './Layout/Header';
import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { MyCart } from './Pages/MyCart';

function App() {

  const [cartTotal,setCartTotal] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{cartTotal,setCartTotal}} >
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={ <Home  /> } />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/cart' element={<MyCart/>} />
            <Route path='/shop/:id' element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

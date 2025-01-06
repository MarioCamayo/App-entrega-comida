import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Home } from './pages/home/Home.jsx'
import {Routes, Route} from 'react-router-dom'
import { Cart } from './pages/cart/Cart';
import { PlaceOrders } from './pages/placeOrders/PlaceOrders';
import { Footer } from './components/Footer/Footer.jsx';
import { useState } from 'react';
import { LoginPoput } from './components/LoginPoput/LoginPoput';

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPoput setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <NavBar  setShowLogin={setShowLogin} />
        <Routes>
          <Route path= '/' element= {<Home />} />
          <Route path= '/cart' element= {<Cart />} />
          <Route path= '/order' element= {<PlaceOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

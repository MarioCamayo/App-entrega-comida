import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Home } from './pages/home/Home.jsx'
import {Routes, Route} from 'react-router-dom'
import { Cart } from './pages/cart/Cart';
import { PlaceOrders } from './pages/placeOrders/PlaceOrders';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path= '/' element= {<Home />} />
        <Route path= '/cart' element= {<Cart />} />
        <Route path= '/placeorders' element= {<PlaceOrders />} />
      </Routes>
    </div>
  )
}

export default App

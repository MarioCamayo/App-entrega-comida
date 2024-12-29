import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Home } from './pages/home/Home.jsx'
import {Routes, Route} from 'react-router-dom'
import { Cart } from './pages/cart/Cart';
import { PlaceOrders } from './pages/placeOrders/PlaceOrders';
import { Footer } from './components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <div className='app'>
        <NavBar />
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

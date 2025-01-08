
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const NavBar = ({setShowLogin}) => {

const [menu, setMenu]= useState('menu')
const {getTotalCartAmount}= useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img className='logo' src= {assets.logo_tu_comida_saludable}  alt="Logo de la página" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={()=> setMenu('home')} className= {menu === 'home' ? 'active' : ''} >inicio</Link>
        <a href='#explore-menu' onClick={()=> setMenu('menu')} className= {menu === 'menu' ? 'active' : ''} >menu</a>
        <a href='#app-download' onClick={()=> setMenu('mobile-app')} className= {menu === 'mobile-app' ? 'active' : ''} >aplicación-móvil</a>
        <a href='#footer' onClick={()=> setMenu('contact-us')} className= {menu === 'contact-use' ? 'active' : ''} >contacto</a>
      </ul>
      <div className='navbar-right'>
        <img src= {assets.search_icon} alt="ícono de buscador" />
        <div>
         <Link to='/cart'>
         <img className='navbar-search-icon' src= {assets.basket_icon} alt="basket_icon" />
         </Link> 
          <div className= {getTotalCartAmount() === 0 ?'':'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Iniciar sesión</button>
      </div>
    </div>
  )
}

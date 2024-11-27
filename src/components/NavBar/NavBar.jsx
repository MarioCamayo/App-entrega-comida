
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets';
import { useState } from 'react';

export const NavBar = () => {

const [menu, setMenu]= useState('home')

  return (
    <div className="navbar">
      <img className='logo' src= {assets.logo}  alt="Logo de la página" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu('home')} className= {menu === 'home' ? 'active' : ''} >home</li>
        <li onClick={()=> setMenu('menu')} className= {menu === 'menu' ? 'active' : ''} >menu</li>
        <li onClick={()=> setMenu('mobile-app')} className= {menu === 'mobile-app' ? 'active' : ''} >mobile-app</li>
        <li onClick={()=> setMenu('contact-use')} className= {menu === 'contact-use' ? 'active' : ''} >contact-use</li>
      </ul>
      <div className='navbar-right'>
        <img src= {assets.search_icon} alt="ícono de buscador" />
        <div>
          <img className='navbar-search-icon' src= {assets.basket_icon} alt="basket_icon" />
          <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

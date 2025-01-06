
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({setShowLogin}) => {

const [menu, setMenu]= useState('menu')

  return (
    <div className="navbar">
      <img className='logo' src= {assets.logo}  alt="Logo de la página" />
      <ul className="navbar-menu">
        <Link to={'/'} onClick={()=> setMenu('home')} className= {menu === 'home' ? 'active' : ''} >home</Link>
        <a href='#explore-menu' onClick={()=> setMenu('menu')} className= {menu === 'menu' ? 'active' : ''} >menu</a>
        <a href='#app-download' onClick={()=> setMenu('mobile-app')} className= {menu === 'mobile-app' ? 'active' : ''} >mobile-app</a>
        <a href='#footer' onClick={()=> setMenu('contact-us')} className= {menu === 'contact-use' ? 'active' : ''} >contact-use</a>
      </ul>
      <div className='navbar-right'>
        <img src= {assets.search_icon} alt="ícono de buscador" />
        <div>
          <img className='navbar-search-icon' src= {assets.basket_icon} alt="basket_icon" />
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >sign in</button>
      </div>
    </div>
  )
}

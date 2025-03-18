
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const NavBar = ({setShowLogin}) => {

const [menu, setMenu]= useState('inicio')
const {getTotalCartAmount, token, setToken}= useContext(StoreContext)

const navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
    
  }



  return (
    <div className="navbar">
        <Link to='/'>
          <img className='logo' 
          src= {assets.logo_tu_comida_saludable} 
            alt="Logo de la página" />
        </Link>

        <ul className="navbar-menu">
          <Link to={'/'} 
              onClick={()=> setMenu('inicio')} 
              className= {menu === 'inicio' ? 'active' : ''} >
                inicio
          </Link>

          <a href='#explore-menu' 
              onClick={()=> setMenu('menu')} 
              className= {menu === 'menu' ? 'active' : ''} >
              menu
          </a>

          <a href='#app-download'
              onClick={()=> setMenu('aplicación-móvil')}
              className= {menu === 'aplicación-móvil' ? 'active' : ''} >
              aplicación-móvil
          </a>

          <a href='#footer'
              onClick={()=> setMenu('contacto')}
              className= {menu === 'contacto' ? 'active' : ''} >
              contacto
          </a>
        </ul>

        <div className='navbar-right'>
              <img src= {assets.search_icon}
               alt="ícono de buscador" />
              <div className='navbar-search-icon'>
                  <Link to='/cart'>
                  <img className='navbar-search-icon' src= {assets.basket_icon} alt="basket_icon" />
                  </Link> 
                  <div className= {getTotalCartAmount() === 0 ?'':'dot'}></div>
              </div>
             
              {!token?<button onClick={()=>setShowLogin(true)}>Iniciar sesión </button>
                :<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="profile_icon" />
                    <ul className='nav-profile-dropdown' >

                          <li onClick={()=>navigate('/myorders')}>
                            <img src= {assets.bag_icon} alt="bag_icon" />
                            <p>Orders</p>
                          </li>
                          <hr />

                          <li onClick={logout}>
                            <img src= {assets.logout_icon} alt="logout_icon" />
                            <p>Logout</p>
                          </li>
                    </ul>
                  </div>
                  }
              </div>

         </div>
            
  
  )
}

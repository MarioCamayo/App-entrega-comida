import { useState } from 'react';
import './LoginPoput.css';
import { assets } from './../../assets/frontend_assets/assets';
export const LoginPoput = ({setShowLogin} ) => {

  const [currState, setCurrState] = useState('Login')

  return (

      <div className='login-poput'>
        <form  className="login-poput-container">
          <div className="login-poput-title">
             <h2>{currState} </h2>
             <img 
             onClick={()=>setShowLogin(false)}
             src= {assets.cross_icon} alt="cross_icon" />
          </div>

          <div className='login-poput-inputs'>
            {currState === 'Login' ? <></> :
            <input type="text" placeholder="Tu Nombre" required />
            
            }
            <input type="email" placeholder="Tu Correo" required />
            <input type="password" placeholder="Tu Contraseña" required />
          </div>

          <button
           className='login-poput-button' 
           type='submit'>
            {currState === 'Sign Up' ? ' Create Una Cuenta' : 'Login'}
          </button>
          <div className='login-poput-condition'>
            <input type="checkbox" required />
            <p>Estoy de acuerdo con los términos y condiciones</p>
          </div>
          {
            currState === 'Login' ?
            <p> Create Una Cuenta?<span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
            :
            <p>Alredy  have an account <span onClick={()=>setCurrState('Login')}>Login here</span></p>
          }

            
        </form>
      </div>  
  )
   }
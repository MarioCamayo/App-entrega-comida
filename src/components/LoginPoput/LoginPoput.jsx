import { useState } from 'react';
import './LoginPoput.css';
import { assets } from './../../assets/frontend_assets/assets';
// import { useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'


export const LoginPoput = ({setShowLogin} ) => {

  const {url, setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState('Login')
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''

  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data, [name]: value}))
  }

  const onLogin = async (event) =>{
      event.preventDefault()  
      let newUrl = url + (currState === 'Login' ? '/api/user/login' : '/api/user/register');

      // let newUrl = url
      // if(currState === 'Login'){
      //   newUrl +='/api/user/login'
      // }
      // else{
      //   newUrl += '/api/user/register'
      // }
      try{
          const response = await axios.post(newUrl,data, {
            headers: { "Content-Type": "application/json" }
          })

          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setShowLogin(false)
          }
          else{
            alert(response.data.message); // Mostramos el mensaje real del backend
            
          }
        }
        catch(error){
          console.error("Error en la solicitud:", error);
          alert(error.response?.data?.message ||"Error en la conexión con el servidor");
        }
  };
      
   

  return (

      <div className='login-poput'>
        <form  onSubmit={onLogin} className="login-poput-container">

          <div className="login-poput-title">
             <h2>{currState} </h2>
             <img 
             onClick={()=>setShowLogin(false)}
             src= {assets.cross_icon} alt="cross_icon" />
          </div>

          <div className='login-poput-inputs'>
            {currState ==='Login'
             ? <></>
             : <input
              value={data.name}
              onChange={onChangeHandler}
              name='name' 
              type="text" 
              placeholder="Tu Nombre" 
              required />
            
            }

            <input
             value={data.email}
             onChange={onChangeHandler}
             name='email'
             type="email"
             placeholder="Tu Correo"
             required />

            <input
             value={data.password}
             name='password'
             onChange={onChangeHandler}
             type="password" 
             placeholder="Tu Contraseña" 
             required />
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
            <p> Create Una Cuenta?
              <span onClick={()=>setCurrState('Sign Up')}>Haz clic aquí</span>
            </p>
            :
            <p>Ya tengo una cuenta
               <span onClick={()=>setCurrState('Login')}>Inicie sesión aquí</span>
            </p>
          }

            
        </form>
      </div>  
     )
   }
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src= {assets.logo} alt="Logo" />
          <p>¡Tu comida, cuando la necesites! Ya sea para una noche en casa o un almuerzo rápido, nosotros nos encargamos de que cada bocado sea especial. Porque sabemos que la buena comida siempre merece estar al alcance de tu mano.
          </p>
          <div className='footer-social-icons'>
            <img src= {assets.facebook_icon}alt="facebook_icon" />
            <img src= {assets.twitter_icon}alt="twitter_icon" />
            <img src= {assets.linkedin_icon}alt="linkedin_icon" />
          </div>
        </div>
        
           

        <div className='footer-content-center'>
          <h2>EMPRESA</h2>
          <ul>
            <li>Inicio</li> 
            <li>Acerca de</li>
            <li>Entregas</li>
            <li>Política de privacidad</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>CONTÁCTENOS</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contacto@entregadecomidarapida.com</li>
         </ul>
          
        </div>
      </div>

         <hr />
         <p className='footer-copyright'>Copyright 2024 © Entregacomidarápida.com - All Right Reserved.</p> 
    </div>
  )
}


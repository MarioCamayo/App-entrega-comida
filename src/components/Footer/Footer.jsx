import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src= {assets.logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime a repellat explicabo ipsam excepturi ea odit adipisci in cupiditate. Laudantium, obcaecati? Exercitationem ex maiores molestiae alias, deleniti quia reiciendis?
          </p>
          <div>
            <img src= {assets.facebook_icon}alt="facebook_icon" />
            <img src= {assets.twitter_icon}alt="twitter_icon" />
            <img src= {assets.linkedin_icon}alt="linkedin_icon" />
          </div>
        </div>
        
           

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
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


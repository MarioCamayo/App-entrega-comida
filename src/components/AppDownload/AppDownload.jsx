import { assets } from '../../assets/frontend_assets/assets'
import './AppDownload.css'

export const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Para una mejor experiencia Descarga <br /> App Tú Comida Favorita</p>
      <div className='app-download-platforms'>
        <img src= {assets.play_store} alt="play_store" />
        <img src={assets.app_store} alt="app_store" />

      </div>
    </div>
  )
}

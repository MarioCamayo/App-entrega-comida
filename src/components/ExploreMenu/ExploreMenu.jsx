import { menu_list } from '../../assets/frontend_assets/assets'
import './ExploreMenu.css'

export const ExploreMenu = ( {category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explora nuestro menú</h1>
      <p className='explore-menu-test'>🍔 Tu comida favorita, a un clic de distancia. ¡Pide, disfruta y saborea el momento! 🍕✨
      </p>
      <div className='explore-menu-list'>
        {
          menu_list.map((item, index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev === item.menu_name ? 'All' : item.menu_name )} className='explore-menu-list-item' key={index}>
                <img className= {category === item.menu_name ? 'active' : ''} src= {item.menu_image} alt="menu_image" />
                <p> {item.menu_name} </p>
                </div>
                )
          })
         }

      </div>
      <hr />

    </div>
  )
}

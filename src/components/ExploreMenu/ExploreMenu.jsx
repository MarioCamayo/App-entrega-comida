import { menu_list } from '../../assets/frontend_assets/assets'
import './ExploreMenu.css'

export const ExploreMenu = ( {category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-test'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quis sequi architecto laboriosam ex. Rerum corrupti velit non, voluptate nisi vero dolor, adipisci odio, magni expedita vel nam necessitatibus laborum!
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

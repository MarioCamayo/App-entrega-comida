import { assets } from '../../assets/frontend_assets/assets'
import './FoodItem.css'
export const FoodItem = ({id, name, price, description, image}) => {
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img  className='food-item-imagen' src= {image} alt="imagen" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src= {assets.rating_starts} alt=" La calificación comienza" />
        </div>
        <p className='food-item-desc'> {description} </p>
        <p className='food-item-price'> {price} </p>
      </div>

    </div>
  )
}

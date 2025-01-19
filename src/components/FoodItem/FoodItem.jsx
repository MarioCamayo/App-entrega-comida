import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemConunt, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/images"+image} alt="imagen" />
        {!cartItems[id] ? (
          <img
            className="add"
            // onClick={addToCart(id)}
            onClick={() => addToCart(id)} // Ahora es una función callback
            src={assets.add_icon_white}
            alt="add_icon_white"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />

            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={() => addToCart(id)} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt=" La calificación comienza" />
        </div>
        <p className="food-item-desc"> {description} </p>
        <p className="food-item-price"> ${price} </p>
      </div>
    </div>
  );
};

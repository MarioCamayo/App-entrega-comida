import { useContext, useState } from 'react'
import './PlaceOrders.css'
import { StoreContext } from '../../context/StoreContext'
import { Navigate } from 'react-router-dom'

export const PlaceOrders = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  
  const [data, setData] = useState({
     firstName:'',
     lastName:'',
     email:'',
     street:'',
     city:'',
     state:'',
     zipcode:'',
     country:'',
     phone:''

  })

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Información de envío</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder='Phone'/>

      </div>
      <div className='place-order-right'>

      <div className="cart-total">
          <h2>Totales del carrito</h2>
          <div>
          <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tarifa de envío</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} </b>
            </div>
          </div>
            <button onClick={()=>Navigate('/order')}>PROCEDER AL PAGO</button>
        </div>

      </div>
    </form>
  )
}

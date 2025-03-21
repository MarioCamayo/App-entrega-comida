import { useContext, useState, useEffect } from 'react'
import './PlaceOrders.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))

  }

  const placeOrder = async(event)=>{
    event.preventDefault()
    let orderItems = []
    food_list.map((item)=>{
      if(cartItems[item._id] > 0){
        let itemInfo = item
        itemInfo['quantity']= cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
     let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    } 
    let response = await axios.post(url+'/api/order/place',orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
    }else{
      alert('Error')
    }

    //  console.log(orderItems)

  }


  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/cart')

    }else if(getTotalCartAmount() === 0){
      navigate('/cart')

    }

  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className="title">Información de envío</p>
        <div className="multi-fields">
          <input 
             name='firstName' 
             onChange={onChangeHandler}
             value={data.firstName}
             type="text" 
             placeholder="First Name"
             required
              />
          <input
             type="text"
             name='lastName'
             onChange={onChangeHandler}
             value={data.lastName}
             placeholder="Last Name" 
             required
              />
        </div>
        <input 
             type="email"
             name='email'
             onChange={onChangeHandler}
             value={data.email}
             placeholder="Email Address" 
             required
             />
        <input 
            type="text"
            name='street'
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street" 
            required
         />
        <div className="multi-fields">
          <input 
             type="text"
             name='city'
             onChange={onChangeHandler}
             value={data.city}
             placeholder="City"
             required
            />
          <input
             type="text" 
             name='state'
             onChange={onChangeHandler}
             value={data.state}
             placeholder="State"
             required
            />
        </div>
        <div className="multi-fields">
          <input
             type="text" 
             name='zipcode'
             onChange={onChangeHandler}
             value={data.zipcode}
             placeholder="Zip code"
             required
            />
          <input 
             type="text"
             name='country'
             onChange={onChangeHandler}
             value={data.country}
             placeholder="Country" 
             required
           />
        </div>
        <input 
             type="text" 
             name='phone'
             onChange={onChangeHandler}
             value={data.phone}
             placeholder='Phone'
             required
        />

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
                  <p>$ {getTotalCartAmount() === 0 ? 0 : 2} </p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} </b>
                </div>
              </div>
                <button type='submit' onClick={()=>navigate('/order')}>PROCEDER AL PAGO</button>
            </div>

      </div>
    </form>
  )
}


import {useState, useContext, useEffect} from 'react'
import {StoreContext} from '../../context/StoreContext'
// import {assets}  from '../../assets/frontend_assets'
import { assets } from '../../assets/frontend_assets/assets';

import axios from 'axios'
import './MyOrders.css'

export const MyOrders = () => {

   const [data, setData] = useState([])
   const {url, token} = useContext(StoreContext)

   const fetchOrders = async ()=>{
      const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}})
      setData(response.data.data)
      console.log(response.data.data)
   }

   useEffect(()=>{
      if(token){
        fetchOrders()

      }

   },[token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {
          data.map((order,index)=>{
            return(
              <div key={index} className='my-orders-order'>
                <img src={assets.parcel_icon} alt='parcel_icon'/>
                <p>{order.items.map((item, index)=>{
                       if(index === order.items.length-1){
                          return item.name+'x'+item.quantity

                       }else{
                          return item.name+'x'+item.quantity+','

                       }
                })} 
                </p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p><span>&#x25cf;</span><b> {order.status} </b></p>
                <button>Track Order</button>
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

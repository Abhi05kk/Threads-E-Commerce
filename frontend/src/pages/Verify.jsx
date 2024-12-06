import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import  axios  from 'axios';

const Verify = () => {

const { navigate, token, setCartItems } =useContext(Context)
const [searchParams,setSearchParams] = useSearchParams()
const url = "http://localhost:4000";
const success = searchParams.get('success')
const orderId = searchParams.get('orderId')

const verifyPayment = async () => {
    try {
        
        if (!token) {
            return null
        }

        const response = await axios.post(`${url}/api/order/verifyStripe`,{success,orderId},{headers: {token}})

        if (response.data.success) {
            setCartItems({})
            navigate('/orders')
        } else {
            navigate('/cart')
        }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}

useEffect(()=>{
    verifyPayment()
},[token])

  return (
    <div>
      
    </div>
  );
}

export default Verify;
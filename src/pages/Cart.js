import { useSelector } from "react-redux"
import {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom"
import CartItem from '../components/CartItem'

export default function Cart(){
    const cart=useSelector((state)=>(state.cart.items)) 
    const [amount, setAmount]=useState(0)
    useEffect(()=>{
        const totalAmount = cart.reduce((total, item) => total + item.price, 0);
        setAmount(totalAmount);
    },[cart])

    return (
        <div>
            <div className='items'>
                {
                    cart.length===0 ? 
                    (<div>
                        <p>Your cart is empty</p>
                        <NavLink to='/'>Shop Now!</NavLink>
                    </div>)
                    :
                    (
                        cart.map((item)=>(
                            <CartItem key={item.id} item={item}></CartItem>
                        ))
                    )
                }
            </div>
            <div className='checkout'>
                Total Items: {cart.length}
                Total Amount: {amount}
                <button>Check Out</button>
            </div>
        </div>
    )
}
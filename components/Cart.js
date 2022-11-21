import {useState} from 'react'
import Image from "next/image";
import CartItem from './CartItem';

export default function Cart({cartItems, setCartItems, cartOpen, setCartOpen}) {

    const cart = cartItems.map(({item,quantity}) => {
        return(
            <CartItem 
            key = {item}
            item = {item}
            quantity = {quantity}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
        )  
    })
    
    return(
        <div className="flex flex-col items-center w-96 md:items-end">
            <Image src={'/assets/svg/empty-cart.svg'}  height={40} width={40} alt='cart' className="hover:cursor-pointer" onClick={() => setCartOpen(!cartOpen)}/>
            {cartOpen ?
                <div className="absolute flex flex-col items-center p-2 bg-white rounded shadow-xl top-14 w-96 md:w-[500px]">
                <h1 className='text-3xl font-bold text-gray-700'>Your Items</h1>
                <div className='flex flex-col justify-center min-h-[200px] gap-2'>
                    {cart}
                </div> 
                <button className='p-1 border-2 rounded border-light_haze bg-dark_mart text-light_blue'>Checkout</button>
            </div> 
            : 
            <></>
            }
            
        </div>
    )
}
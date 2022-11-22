import {useState} from 'react'
import Image from "next/image";
import CartItem from './CartItem';

export default function Cart({cartItems, setCartItems, cartOpen, setCartOpen}) {

    const cart = cartItems.map(({item,quantity,image}) => {
        return(
            <CartItem 
            key = {item}
            item = {item}
            quantity = {quantity}
            image = {image}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
        )  
    })
    
    return(
        <div className="flex flex-col items-center md:items-end">
            <Image src={'/assets/svg/empty-cart.svg'}  height={40} width={40} alt='cart' className="hover:cursor-pointer" onClick={() => setCartOpen(!cartOpen)}/>
            {cartOpen ?
                <div className="absolute flex flex-col items-center p-2 bg-white rounded shadow-xl top-14 w-96 lg:w-[500px] max-h-96 overflow-y-auto">
                <h1 className='text-3xl font-bold text-gray-700'>Your Items</h1>
                <div className='relative flex flex-col justify-center'>
                    {cart.length > 0 ? cart : <h1 className='h-24 my-8 text-xl font-bold text-gray-500'>Nothing in cart...</h1>}
                </div> 
                <button className='p-1 border-2 rounded border-light_haze bg-dark_mart text-light_blue'>Checkout</button>
            </div> 
            : 
            <></>
            }
            
        </div>
    )
}
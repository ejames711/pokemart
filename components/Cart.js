import Image from "next/image";
import CartItem from './CartItem';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Cart({cartOpen, setCartOpen}) {

    const cart = useSelector((state) => state.cartReducer.cart)

    const cartDisplay = cart?.map((item) => (
        <CartItem 
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        />
    ))
    
    return(
        <div className="flex flex-col items-center md:items-end">
            <Image src={'/assets/svg/empty-cart.svg'}  height={40} width={40} alt='cart' className="hover:cursor-pointer" onClick={() => setCartOpen(!cartOpen)}/>
            {cartOpen ?
                <div className="absolute flex flex-col items-center p-2 bg-white rounded shadow-xl top-14 w-96 lg:w-[500px] max-h-96 overflow-y-auto">
                <h1 className='text-3xl font-bold text-gray-700'>Items</h1>
                <div className='relative flex flex-col justify-center'>
                    {cartDisplay.length <= 0 ? <p className="h-40 mt-20 text-2xl font-semibold text-center text-gray-700">No items in cart...</p> : cartDisplay}
                </div> 
                <button className='p-1 border-2 rounded border-light_haze bg-dark_mart text-light_blue'><Link href={'/checkout'} >Checkout</Link></button>
            </div> 
            : 
            <></>
            }
        </div>
    )
}
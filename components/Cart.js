import {useState} from 'react'
import Image from "next/image";

export default function Cart() {
    const [cartOpen, setCartOpen] = useState(false)
    return(
        <div className="flex flex-col items-center md:items-end w-96">
            <Image src={'/assets/svg/empty-cart.svg'}  height={40} width={40} alt='cart' className="hover:cursor-pointer" onClick={() => setCartOpen(!cartOpen)}/>
            {cartOpen ?
                <div className="absolute flex flex-col items-center p-2 bg-white rounded shadow-xl top-14 w-96">
                <h1 className='text-3xl font-bold text-gray-700'>Your Items</h1>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
                <p>Item 5</p>
                <p>Item 6</p>
                <p>Item 7</p>
                <p>Item 8</p>
                <button className='p-1 border-2 rounded border-light_haze bg-dark_mart text-light_blue'>Checkout</button>
            </div> : <></>
            }
            
        </div>
    )
}
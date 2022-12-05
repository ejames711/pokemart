import Image from "next/image";
import CartItem from './CartItem';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

export default function Cart({cartOpen, setCartOpen}) {

    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity:1,
            transition: {
                duration: 0.1,
            }
        },
    }

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

    const getTotal = () => {
        let totalQuantity = 0
        cart.forEach(item => {
          totalQuantity += item.quantity
        })
        return {totalQuantity}
      }
    
    return(
        <div className="flex flex-col items-center md:items-end" >
            <div className={getTotal().totalQuantity <= 0 ? "hidden" : "absolute flex items-center justify-center w-6 h-6 p-1 text-white bg-black rounded-full top-6 hover:cursor-pointer"} onClick={() => setCartOpen(!cartOpen)}>{getTotal().totalQuantity}</div>
            <Image src={'/assets/svg/empty-cart.svg'}  height={50} width={50} alt='cart' className="p-1 rounded hover:cursor-pointer hover:bg-slate-600" onClick={() => setCartOpen(!cartOpen)}/>
            {cartOpen ?
            <motion.div className="absolute flex flex-col items-center p-2 bg-white rounded shadow-xl top-14 w-96 lg:w-[500px] max-h-96 overflow-y-auto" variants={fadeIn} initial="hidden" animate="visible">
                <h1 className='text-3xl font-bold text-gray-700'>Items</h1>
                <div className='relative flex flex-col justify-center'>
                    {cartDisplay.length <= 0 ? <p className="h-40 mt-20 text-2xl font-semibold text-center text-gray-700">No items in cart...</p> : cartDisplay}
                </div> 
                <motion.button className='p-1 border-2 rounded border-light_haze bg-dark_mart text-light_blue' 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                whileTap={{ scale: 0.9 }}
                ><Link href={'/checkout'} >Checkout</Link></motion.button>
            </motion.div> 
            : 
            <></>
            }
        </div>
    )
}
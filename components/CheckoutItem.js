import Image from "next/image"
import { useDispatch } from "react-redux"
import { removeItem,incrementQuantity,decrementQuantity } from "../redux/cartSlice"
import { motion } from "framer-motion"

export default function CheckoutItem({id, name, image, price, quantity}){

    const dispatch = useDispatch()

    return(
        <div className="flex items-center w-full md:w-2/3 shrink-0 h-20 gap-4 font-semibold text-center rounded-sm lg:min-w-[400px] justify-between px-1 my-2 bg-white">
            <Image height={50} width={50} alt={name} src={image}/>
            <h1 className="w-16 font-bold md:text-xl">{name.replace('-',' ')}</h1>
            <p>Qty: {quantity}</p>
            <p>Price: ${price * quantity}</p>
            <div className="flex flex-col items-center gap-1 justify-evenly">
                <div className="flex gap-2 text-2xl md:gap-0">
                    <motion.button className="px-1 hover:text-gray-600" onClick={() => dispatch(decrementQuantity(id))} whileTap={{ scale: 0.8 }}>-</motion.button>
                    <motion.button className="px-1 hover:text-gray-600" onClick={() => dispatch(incrementQuantity(id))} whileTap={{ scale: 0.9 }}>+</motion.button>  
                </div>
                <Image height={20} width={20} src='/assets/svg/trash-can.svg' alt='trash-can/remove' className='hover:cursor-pointer' onClick={() => dispatch(removeItem(id))} />
            </div>
        </div>
    )
}
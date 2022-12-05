import Image from "next/image"
import { useDispatch } from "react-redux"
import { decrementQuantity,incrementQuantity,removeItem } from "../redux/cartSlice"
import { motion,AnimatePresence } from "framer-motion"

export default function CartItem({id, name, image, price, quantity}) {

    const dispatch = useDispatch()

    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity:1,
            transition: {
                duration: 0.2,
            }
        },
    }

    return(
        <motion.div className="flex items-center w-full shrink-0 h-20 gap-4 font-semibold text-center rounded-sm shadow lg:min-w-[400px] justify-between px-1 my-2" 
        variants={fadeIn} 
        initial="hidden" 
        animate="visible"
        >
            <Image height={50} width={50} alt={name} src={image}/>
            <h1 className="w-16 md:text-xl">{name.replace('-',' ')}</h1>
            <p>Qty: {quantity}</p>
            <p>Price: ${price * quantity}</p>
            <div className="flex flex-col items-center gap-1 justify-evenly">
                <div className="text-2xl">    
                    <motion.button className="px-1 hover:text-gray-600" onClick={() => dispatch(decrementQuantity(id))} whileTap={{ scale: 0.8 }}>-</motion.button>
                    <motion.button className="px-1 hover:text-gray-600" onClick={() => dispatch(incrementQuantity(id))} whileTap={{ scale: 0.9 }}>+</motion.button>
                </div>
                <Image height={30} width={30} src='/assets/svg/trash-can.svg' alt='trash-can/remove' className='p-1 rounded hover:cursor-pointer hover:bg-slate-400' onClick={() => dispatch(removeItem(id))} />
            </div>
        </motion.div>
    )
}
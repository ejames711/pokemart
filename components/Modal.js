import {motion} from 'framer-motion'
import Backdrop from './Backdrop'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity:1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

export default function Modal({handleClose,itemData}) {

    return(
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className='w-2/3 md:w-[700px] md:max-w-5/6 min-h-[300px] m-auto px-2 rounded flex flex-col items-center bg-white'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <button onClick={handleClose} className='border-2 border-black rounded'>Close</button>
            <p>{itemData.name}</p>
            </motion.div>

        </Backdrop>
    )
}
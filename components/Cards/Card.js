import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function Card({
    id,
    name,
    description,
    image,
    price,
    getItemData,
    open,
    close,
    modalOpen,
}) {

    const dispatch = useDispatch()

    function activateModal() {
        modalOpen ? close() : open()
        getItemData(name)
    }

    return(
        <motion.div 
        className="flex flex-col items-center text-center border-4 border-blue-100 rounded shadow-xl shrink-0 text-dark_mart justify-evenly w-52 h-80 bg-light_blue"
        
        whileHover={
            modalOpen ? {} :
            {
            scale:1.1,
            transition: { duration: 0.2}
        }}
        >
            <div className="flex items-center justify-center w-2/3 bg-white rounded shadow-md h-1/3">
                <Image src={image} height={96} width={96} alt={name}/>
            </div>
            <h1 className="text-xl font-bold font-frag">{name.replace('-',' ')}</h1>
            <p className="px-2 text-sm font-semibold font-frag">{description}</p>
            <div className="flex gap-6">
                <button className="pb-1 font-bold text-center text-light_haze hover:text-slate-600" onClick={activateModal}>Learn More</button>
            </div>
            <motion.button className="px-2 py-1 font-bold text-white rounded-full bg-light_haze hover:text-slate-600" 
            onClick={() => dispatch(addToCart({id,name,image,price}))}
            whileHover={{
                scale:1.1,
                transition: { duration: 0.2}
            }}
            whileTap={{ scale: 0.8 }}
            >Add To Cart</motion.button>
        </motion.div>
    )
}
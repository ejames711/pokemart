import Image from "next/image";
import { useState } from "react";

export default function Card({
    name,
    description,
    image,
    getItemData,
    open,
    close,
    modalOpen,
    setCartItems,
}) {

    const [count, setCount] = useState(0)

    function addCount() {
        if (count < 100) {
            setCount(count + 1)
        }
        else {
            setCount(100)
        }
    }

    function subCount() {
        if (count  > 0) {
            setCount(count - 1)
        } else {
            setCount(0)
        }
    }

    function activateModal() {
        modalOpen ? close() : open()
        getItemData(name)
    }

    function addItemToCart() {
        const newItem = {
            item : name,
            quantity : count,
            image : image,
        }
        setCartItems((prevCart) => {
            if( [...prevCart].some(e => e.item === name) || count === 0){
                return [...prevCart]
            }else {
                return [...prevCart,newItem]
            }
        })
    }

    return(
        <div className="flex flex-col items-center text-center border-4 border-blue-100 rounded shadow-xl shrink-0 text-dark_mart justify-evenly w-52 h-80 bg-light_blue">
            <div className="flex items-center justify-center w-2/3 bg-white rounded shadow-md h-1/3">
                <Image src={image} height={96} width={96} alt={name}/>
            </div>
            <h1 className="text-xl font-bold font-frag">{name.replace('-', ' ')}</h1>
            <p className="px-2 text-sm font-semibold font-frag">{description}</p>
            <div className="flex gap-6">
                <button className="pb-1 font-bold text-center text-light_haze" onClick={activateModal}>Learn More</button>
            </div>
            <div className="flex items-center w-full font-bold text-haze_blue justify-evenly">
                <button className="flex items-center justify-center w-1/6 h-6 bg-white border-2 rounded-md border-light_haze" onClick={subCount}>-</button>
                <div className="flex items-center justify-center w-1/3 h-6 bg-white border-2 rounded-md border-light_haze">{count}</div>
                <button className="flex items-center justify-center w-1/6 h-6 bg-white border-2 rounded-md border-light_haze" onClick={addCount}>+</button>
            </div>
            <button className="px-2 py-1 font-bold text-white rounded-full bg-light_haze" onClick={addItemToCart}>Add To Cart</button>
        </div>
    )
}
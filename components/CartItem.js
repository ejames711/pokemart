import Image from "next/image"
import { useState } from "react"

export default function CartItem({cartItems, setCartItems, item, quantity, image}) {

    const [newItemCount, setNewItemCount] = useState(quantity)

    function subItemQuantity() {
        newItemCount > 1 ? setNewItemCount(newItemCount - 1) : setNewItemCount(1)
    }

    function addItemQuantity() {
        newItemCount < 100 ? setNewItemCount(newItemCount + 1) : setNewItemCount(100)
    }

    function removeItem() {
        const newCart = cartItems.filter((e) => {
            return e.item !== item
        })
        setCartItems(newCart)
        console.log(item)
    }

    

    return(
        <div className="flex items-center w-full shrink-0 h-20 gap-4 font-semibold text-center rounded-sm shadow lg:min-w-[400px] justify-evenly px-1 my-2 bg-slate-300">
            <Image height={50} width={50} alt={item} src={image}/>
            <h1 className="md:text-xl">{item.replace('-', ' ')}</h1>
            <p>Qty: {newItemCount !== quantity ? newItemCount : quantity}</p>
            <div className="flex flex-col items-center justify-evenly">
                <div className="text-2xl">
                    <button className="px-2" onClick={subItemQuantity}>-</button>
                    <button className="px-2" onClick={addItemQuantity}>+</button>
                </div>
                <Image height={20} width={20} src='/assets/svg/trash-can.svg' alt='trash-can/remove' onClick={removeItem} className='hover:cursor-pointer' />
            </div>
            
        </div>
    )
}
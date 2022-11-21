import { useState } from "react"

export default function CartItem({cartItems, setCartItems, item, quantity}) {

    const [newItemCount, setNewItemCount] = useState(quantity)

    function subItemQuantity() {
        newItemCount > 1 ? setNewItemCount(newItemCount - 1) : setNewItemCount(1)
    }

    function addItemQuantity() {
        newItemCount < 100 ? setNewItemCount(newItemCount + 1) : setNewItemCount(100)
    }

    function removeItem() {
        const newCart = cartItems.filter((item) => {
            return item.item === item
        })
        setCartItems(newCart)
    }

    return(
        <div className="flex items-center justify-between w-full h-12 gap-2 p-1 rounded-sm bg-slate-300">
            <p>Item: {item}</p>
            <p>Quantity: {newItemCount !== quantity ? newItemCount : quantity}</p> 
            <button onClick={subItemQuantity}>Subtract</button>
            <button onClick={addItemQuantity}>Add</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}
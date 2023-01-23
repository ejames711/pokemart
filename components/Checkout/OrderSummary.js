import { useSelector } from "react-redux"
import CheckoutItem from "../CheckoutItem"


export default function OrderSummary(){

    const cart = useSelector((state) => state.cartReducer.cart)

    const checkoutDisplay = cart?.map((item) => (
        <CheckoutItem
        key={item.id} 
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        />
    ))

    
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center md:text-start">Order Summary</h2>
            <div className="flex flex-col">
                {checkoutDisplay.length > 0 ? checkoutDisplay : <p className="m-auto mt-40 text-xl font-semibold text-gray-700">No items in cart...</p>}
            </div>
        </div>
    )
}
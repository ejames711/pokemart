import { useSelector } from "react-redux"

export default function PaymentDetails(){

    const cart = useSelector((state) => state.cartReducer.cart)

    const getTotal = () => {
        let totalPrice = 0
        cart.forEach(item => {
          totalPrice += item.price * item.quantity
        })
        return {totalPrice}
      }

    return(
        <div className="flex flex-col items-center w-full gap-2 p-4 rounded shadow-lg md:items-start h-fit md:w-1/2">
            <h2 className="text-2xl font-bold">Payment Details</h2>
            <p className="w-64 font-semibold text-center text-gray-500 md:text-start">Complete your order by providing fulfillment details below.</p>
            <p className="w-2/3 mx-auto font-semibold text-center text-red-500">Warning! This contact info is stored in a test database! Only use info you are comfortable sharing!</p>
            <form className="flex flex-col w-2/3 gap-4 pl-2">
                <p>Email</p>
                <input type='text' className="h-10 border-2 border-gray-500 rounded-sm"></input>
                <p>Address</p>
                <input type='text' className="h-10 border-2 border-gray-500 rounded-sm"></input>-
                <p>Name</p>
                <input type='text' className="h-10 border-2 border-gray-500 rounded-sm"></input>
            </form>
            <h3 className="mt-4 text-2xl font-bold underline">Total</h3>
            <p className="text-xl font-semibold">${getTotal().totalPrice}</p>
            <button className="h-10 mx-auto mt-6 font-bold text-white rounded w-28 bg-dark_mart">Checkout</button>
        </div>
    )
}
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { useState } from "react"
import { sendPaymentForm } from "../../lib/api"

export default function PaymentDetails(){

    const cart = useSelector((state) => state.cartReducer.cart)

    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      address: '',
    })

    const handleChange = ({target}) => setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [target.name]: target.value,
    }))

    const onSubmit = async () => {
      await sendPaymentForm(formValues)
    }

    const getTotal = () => {
        let totalPrice = 0
        cart.forEach(item => {
          totalPrice += item.price * item.quantity
        })
        return {totalPrice}
      }

    return(
        <div className="flex flex-col items-center w-full gap-2 p-4 rounded shadow md:items-start h-fit md:w-1/2">
            <h2 className="text-2xl font-bold">Payment Details</h2>
            <p className="w-64 font-semibold text-center text-gray-800 md:text-start">Complete your order by providing fulfillment details below.</p>
            <p className="w-2/3 font-semibold text-center text-red-400 md:text-start">Warning! This contact info is stored in a test database! Only use info you are comfortable sharing!</p>
            <form className="flex flex-col w-2/3 gap-4">
                <input type='text' name="name" value={formValues.name} className="h-10 pl-2 border-2 border-gray-500 rounded-sm" placeholder="Name..." required onChange={handleChange}/>
                <input type='email' name="email" value={formValues.email} className="h-10 pl-2 border-2 border-gray-500 rounded-sm" placeholder="Email..." required onChange={handleChange}/>
                <input type='text' name="address" value={formValues.address} className="h-10 pl-2 border-2 border-gray-500 rounded-sm" placeholder="Address..." required onChange={handleChange}/>
                <h3 className="mt-4 text-2xl font-bold underline">Total</h3>
                <p className="text-xl font-semibold">${getTotal().totalPrice}</p>
                <motion.button 
                type='submit'
                className="h-10 mx-auto mt-6 text-lg font-bold text-white rounded md:mx-0 w-28 bg-dark_mart hover:text-gray-300"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                whileTap={{ scale: 0.9 }}
                disabled = { !formValues.name || !formValues.email || !formValues.address }
                onClick={onSubmit}
                >Checkout</motion.button>
            </form>
        </div>
    )
}
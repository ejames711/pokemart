import Image from "next/image"
import Link from "next/link"
import Nav from "../components/Page/Nav"
import OrderSummary from "../components/Checkout/OrderSummary"
import PaymentDetails from "../components/Checkout/PaymentDetails"

export default function Checkout() {

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center w-full md:mt-5 md:ml-10 md:justify-start">
                <Link href={'/'}>
                    <Image src={'/assets/svg/pokeball-black.svg'} height={80} width={80}/>
                </Link>
                <h1 className="ml-6 text-3xl font-bold">Cart</h1>
            </div>
            <div className="flex flex-col w-full md:mt-10 md:flex-row justify-evenly md:justify-between md:mx-2 lg:justify-evenly">
                <OrderSummary />
                <PaymentDetails />
            </div>
        </div> 
    )
}
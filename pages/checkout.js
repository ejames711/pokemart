import Image from "next/image"
import Link from "next/link"
import OrderSummary from "../components/Checkout/OrderSummary"
import PaymentDetails from "../components/Checkout/PaymentDetails"

export default function Checkout() {

    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="flex items-center w-full justify-evenly md:justify-between">
                <div className="flex items-center md:ml-8">
                    <Link href={'/'}>
                        <Image src={'/assets/svg/pokeball-black.svg'} height={80} width={80} alt="pokeball"/>
                    </Link>
                    <h1 className="ml-6 text-3xl font-bold">Cart</h1>
                </div>
                <Link href={'/'}>
                    <Image src={'/assets/home.svg'} height={50} width={50} className='md:mr-10' alt='home'/>
                </Link>
            </div>
            <div className="flex flex-col justify-between w-full md:mt-10 md:flex-row lg:mx-2 lg:justify-evenly">
                <OrderSummary />
                <PaymentDetails />
            </div>
        </div> 
    )
}
import Image from "next/image"

export default function CartItem({name, image, price, quantity}) {


    return(
        <div className="flex items-center w-full shrink-0 h-20 gap-4 font-semibold text-center rounded-sm shadow lg:min-w-[400px] justify-between px-1 my-2 bg-slate-300">
            <Image height={50} width={50} alt={name} src={image}/>
            <h1 className="w-16 md:text-xl">{name.replace('-',' ')}</h1>
            <p>Qty: {quantity}</p>
            <p>Price: ${price * quantity}</p>
            <div className="flex flex-col items-center gap-1 justify-evenly">
                <div className="text-2xl">
                    <button className="px-1" >-</button>
                    <button className="px-1">+</button>
                </div>
                <Image height={20} width={20} src='/assets/svg/trash-can.svg' alt='trash-can/remove' className='hover:cursor-pointer' />
            </div>
        </div>
    )
}
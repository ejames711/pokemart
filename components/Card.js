import Image from "next/image";
import { useState } from "react";

export default function Card({name,description,image}){

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

    return(
        <div className="flex flex-col items-center text-center border-4 border-blue-100 rounded shadow-xl text-dark_mart justify-evenly w-52 h-80 bg-light_blue">
            <div className="flex items-center justify-center w-2/3 bg-white rounded shadow-md h-1/3">
                <Image src={image} height={96} width={96} alt={name}/>
            </div>
            <h1 className="text-xl font-bold font-frag">{name}</h1>
            <p className="px-2 text-sm font-semibold font-frag">{description}</p>
            <div className="flex items-center w-full justify-evenly text-light_haze">
                <button className="flex items-center justify-center w-1/6 h-6 bg-white border-2 rounded-md border-light_haze" onClick={subCount}>-</button>
                <div className="flex items-center justify-center w-1/3 h-6 bg-white border-2 rounded-md border-light_haze">{count}</div>
                <button className="flex items-center justify-center w-1/6 h-6 bg-white border-2 rounded-md border-light_haze" onClick={addCount}>+</button>
            </div>
        </div>
    )
}
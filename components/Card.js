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
        <div className="flex flex-col items-center text-center rounded shadow-xl justify-evenly w-52 h-80 bg-light_blue">
            <div className="flex items-center justify-center w-2/3 bg-white rounded h-1/3">
                <Image src={image} height={96} width={96} alt={name}/>
            </div>
            <h1 className="text-xl">{name}</h1>
            <p className="text-sm">{description}</p>
            <div className="flex items-center w-full justify-evenly">
                <button className="w-1/6 h-6 bg-white rounded-md" onClick={subCount}>-</button>
                <div className="w-1/3 h-6 bg-white rounded-md">{count}</div>
                <button className="w-1/6 h-6 bg-white rounded-md" onClick={addCount}>+</button>
            </div>
        </div>
    )
}
import Image from "next/image"


export default function Header(){
    return(
        <div className="flex items-center w-full h-96 bg-[url('/assets/light-mart.webp')] bg-cover bg-center">
            <h1 className="flex w-1/5 ml-10 text-5xl font-bold text-center text-white">EVERYTHING YOU NEED FOR YOUR NEXT ADVENTURE</h1>
        </div>
    )
}
import Image from "next/image"


export default function Header(){
    return(
        <div className="flex items-center w-full h-96 bg-[url('/assets/light-mart.webp')] bg-cover bg-center">
            <h1 className="flex w-full text-5xl font-bold text-center text-white md:ml-10 lg:w-1/5">EVERYTHING YOU NEED FOR YOUR NEXT ADVENTURE</h1>
        </div>
    )
}
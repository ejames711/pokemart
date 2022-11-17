import Image from "next/image";

export default function About() {
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-2 px-4 mt-10 text-center" id='about'>
                <h1 className="text-3xl font-bold text-gray-600">THE HIGHEST QUALITY GOODS</h1>
                <p className="w-full md:text-xl md:w-1/3 font-frag">Were on a mission to be the very best, like no one ever was. Making customers happy is our real test, their satisfaction is our cause.</p>
            </div>
            <div className="flex flex-col justify-between w-full h-full gap-10 mt-20 lg:flex-row" >
                <div className="flex flex-col items-center gap-10" >
                    <h1 className="text-6xl font-bold text-center text-dark_mart">Why choose us?</h1>
                    <p className="w-full py-2 mx-auto text-3xl font-semibold text-center md:text-4xl md:w-2/3 md:text-slate-800">Were a team of expert clerks. Dedicated to helping you find the best goods at all hours of your day.</p>
                    <ul className="flex flex-col gap-4 ml-8 text-2xl font-semibold text-gray-600 list-disc md:text-3xl md:gap-10 md:ml-0">
                        <li>Open 24/7</li>
                        <li>Always fully stocked</li>
                        <li>Kind, friendly staff</li>
                        <li>Dedicated to your success as a trainer</li>
                    </ul>
                </div>
                <Image src={'/assets/mart.webp'} height={800} width={900}/>
            </div>
        </>
    )
}
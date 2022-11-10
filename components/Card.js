
export default function Card({description, image}){
    return(
        <div className="flex flex-col items-center ml-10 text-center rounded shadow-md justify-evenly w-52 h-80 bg-light_blue">
            <div className="w-2/3 bg-white rounded h-1/3"></div>
            <h1 className="text-xl">Pokeball</h1>
            <p className="text-sm">The classic. Always there when you need it</p>
            <div className="flex items-center w-full justify-evenly">
                <button className="w-1/6 h-6 bg-white rounded-md">-</button>
                <div className="w-1/3 h-6 bg-white rounded-md">0</div>
                <button className="w-1/6 h-6 bg-white rounded-md">+</button>
            </div>
        </div>
    )
}
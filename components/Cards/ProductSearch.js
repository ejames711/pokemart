import Image from 'next/image'

export default function ProductSearch({setSearch}) {

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return(
        <div className="flex m-auto border-b-2 md:my-6 w-72 md:w-96 border-dark_mart md:m-0">
            <Image src={'/assets/svg/magnify-glass.svg'} height={20} width={20} alt='magnify-glass'/>
            <input type='text' className="w-2/3 ml-2 md:w-full outline-0" placeholder=" Search Items..." onChange={handleChange}></input>
        </div>
    )
}
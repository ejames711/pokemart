import Image from 'next/image'

export default function ProductSearch({search, setSearch}) {

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return(
        <div className="flex mx-auto my-6 border-b-2 w-72 md:w-96 border-dark_mart">
            <Image src={'/assets/svg/magnify-glass.svg'} height={20} width={20} />
            <input type='text' className="w-2/3 ml-2 md:w-full outline-0" placeholder=" Search Items..." onChange={handleChange}></input>
        </div>
    )
}
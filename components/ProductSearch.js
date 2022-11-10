

export default function ProductSearch({search, setSearch}) {

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return(
        <div className="flex justify-center mx-auto my-6 w-96">
            <input type='text' className="w-2/3 border-b-2 md:w-full border-dark_mart outline-0" placeholder=" Search Items..." onChange={handleChange}></input>
        </div>
    )
}
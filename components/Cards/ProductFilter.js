

export default function ProductFilter({setFilterValue}) {

    return(
        <div className="m-auto mt-6 mb-4 md:mx-4">
            <label />
            <select className="p-2 font-semibold text-dark_mart" onChange={(e) => setFilterValue(e.target.value)}>
                <option value="" selected >Filter Items</option>
                <option value="pokeballs" >Pokeballs</option>
                <option value="healing">Healing</option>
                <option value="value">Value</option>
                <option value="premium">Premium</option>
            </select>
        </div>
    )
}
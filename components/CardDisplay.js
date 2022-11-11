import { useState } from "react"
import Card from './Card'
import ProductsList from "../products.json"
import ProductSearch from './ProductSearch'
import axios from "axios"

export default function CardDisplay() {

    const [search, setSearch] = useState("")
    const [itemName, setItemName] = useState("")

    const getItemData = async (name) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/item/${name.toLowerCase()}/`)
        console.log(res.data)
    }

    const filteredProducts = Object.entries(ProductsList)
    .filter(([_, product]) => {
        return(
            product.name.toLowerCase()
            .includes(search.toLowerCase())
        )
    })
    .map(([index, {name,description,image}]) => {
        return(
            <Card 
            key={index}
            name={name}
            description={description}
            image={image}
            getItemData={getItemData}
            />
        ) 
    })

    return(
        <>
            <ProductSearch setSearch={setSearch}/>
            <div className="flex flex-col justify-center items-center min-h-[400px]">
                <div className='flex flex-col flex-wrap items-center justify-center w-3/5 gap-10 my-4 md:flex-row'>
                    {filteredProducts}
                </div>
            </div>
        </>
    )
}
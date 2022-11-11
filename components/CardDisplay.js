import { useState } from "react"
import Card from './Card'
import Products from "../products.json"
import ProductSearch from './ProductSearch'

export default function CardDisplay() {

    const [search, setSearch] = useState("")

    const filteredProducts = Object.entries(Products)
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
            />
        ) 
    })
    
    console.log(filteredProducts)

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
import { useState } from "react"
import Card from './Card'
import ProductsList from "../../products.json"
import ProductSearch from '../ProductSearch'
import axios from "axios"

export default function CardDisplay({open,close,modalOpen,setItemData}) {

    const [search, setSearch] = useState("")

    const getItemData = async (name) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/item/${name.toLowerCase()}/`)
        setItemData({
            name: res.data.name,
            category: res.data.category.name,
            effect: res.data.effect_entries[0].effect,
            flavor_text: res.data.flavor_text_entries[0].text,
        })
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
            open={open}
            close={close}
            modalOpen={modalOpen}
            />
        ) 
    })

    return(
        <>
            <ProductSearch setSearch={setSearch}/>
            <div className="flex flex-col justify-center items-center min-h-[710px]">
                <div className='flex flex-col flex-wrap items-center justify-center w-3/5 gap-10 my-4 md:flex-row'>
                    {filteredProducts}
                </div>
            </div>
        </>
    )
}
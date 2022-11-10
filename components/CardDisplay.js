import Card from './Card'
import Products from "../products.json"

export default function CardDisplay() {

    const products = Object.entries(Products).map(([index, {name,description,image}]) => {
        return(
            <Card 
            key={index}
            name={name}
            description={description}
            image={image}
            />
        ) 
    })

    return(
        <div className='flex flex-col items-center justify-center gap-4 px-4 my-6 md:flex-row'>
            {products}
        </div>
    )
}
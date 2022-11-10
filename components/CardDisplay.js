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
        <>
            <div className='flex flex-col items-center justify-center gap-10 my-4 md:flex-row'>
                {products.filter((product) => product.key <= 3)}
            </div>
            <div className='flex flex-col items-center justify-center gap-10 my-4 md:flex-row'>
                {products.filter((product) => product.key > 3)}
            </div>
        </>
    )
}
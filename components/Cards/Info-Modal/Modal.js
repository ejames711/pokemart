import {motion} from 'framer-motion'
import Image from 'next/image'
import Backdrop from './Backdrop'
import dropIn from '../../../animations/dropIn'
const capitalize = require('capitalize')


export default function Modal({handleClose,itemData}) {

    return(
        <Backdrop onClick={handleClose} >
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className='w-2/3 md:w-[700px] md:max-w-5/6 min-h-[350px] max-h-[550px] overflow-y-auto md:m-auto px-8 pb-8 rounded-lg flex flex-col bg-light_blue text-dark_mart font-semibold mt-20 '
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <button onClick={handleClose} className='absolute left-0 w-10 m-2 text-2xl rounded hover:text-gray-600'>X</button>
                <div className='flex flex-col items-center gap-4 mt-8 md:ml-8 md:w-2/3 md:justify-between md:flex-row'>
                    <Image src={`/assets/${itemData.name.replace(' ','-')}/${itemData.name.replace('-','')}.png`} height={96} width={96} alt={itemData.name} className='bg-white rounded-md' />
                    <h1 className='text-6xl text-center underline'>{capitalize.words(itemData.name.replace('-',' '))}</h1>
                </div>
                <div className='flex flex-col gap-8 mt-8 text-xl text-center'>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <h2 className='font-bold'>Category:</h2>
                        <p>{capitalize.words(itemData.category.replace('-', ' '))}</p>
                    </div>
                    <div className='w-full border-b-2 rounded md:px-8 border-dark_mart'></div>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <h2 className='font-bold'>Effect:</h2>
                        <p>{capitalize(itemData.effect.substring(itemData.effect.indexOf(': ') + 4).replace(':',''))}</p>
                    </div>
                    <div className='flex w-full border-b-2 md:px-8 border-dark_mart'></div>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <h2 className='font-bold'>Flavor Text:</h2>
                        <p>{capitalize(itemData.flavor_text)}</p>
                    </div>
                </div>
            </motion.div>

        </Backdrop>
    )
}
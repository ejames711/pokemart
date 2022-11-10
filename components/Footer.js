import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <div className="flex items-center w-full text-white justify-evenly h-28 bg-dark_mart">
            <div className='flex gap-2'>
            <Image src={"/assets/copyright-white.svg"} height={20} width={20}/> Pokemart Holdings LLC . All Rights Reserved
            </div>
            <div>
                Images provided by <Link className='font-bold' href={'https://icons8.com/'}>ICONS8</Link>
            </div>
        </div>
    )
}
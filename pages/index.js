import Head from 'next/head'
import Header from '../components/Page/Header'
import Nav from '../components/Page/Nav'
import About from '../components/Page/About'
import CardDisplay from '../components/Cards/CardDisplay'
import Footer from '../components/Page/Footer'
import Modal from '../components/Cards/Info-Modal/Modal'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  //cart
  const [cartItems,setCartItems] = useState([])

  //modal
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  const[itemData,setItemData] = useState({
    name:"",
    category: "",
    effect: "",
    flavor_text: "",
  })

  return (
    <>
    <Head>
        <title>Pokemart Inc.</title>
        <link rel="icon" type="image/svg" href="/assets/pokeball-white.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pokemart offerings and store" />
    </Head>
      <Nav cartItems={cartItems} />
      <Header />
      <About />
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} itemData={itemData}/>}
      </AnimatePresence>
      <CardDisplay 
      close={close} 
      open={open} 
      modalOpen={modalOpen} 
      setItemData={setItemData} 
      cartItems={cartItems} 
      setCartItems={setCartItems}/>
      <Footer />
    </>
  )
}

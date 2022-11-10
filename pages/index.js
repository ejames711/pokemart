import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import CardDisplay from '../components/CardDisplay'
import Footer from '../components/Footer'
import ProductSearch from '../components/ProductSearch'

export default function Home() {
  return (
    <>
    <Head>
        <title>Pokemart Inc.</title>
        <link rel="icon" type="image/svg" href="/assets/pokeball-white.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pokemart offerings and store" />
    </Head>
      <Nav />
      <Header />
      <About />
      <CardDisplay/>
      <Footer />
    </>
  )
}

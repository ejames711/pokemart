import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import CardDisplay from '../components/cardDisplay'

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <CardDisplay/>
    </>
  )
}

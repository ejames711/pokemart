import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Card />
    </>
  )
}

import Head from 'next/head'
import React from 'react'
import { Footer, Navbar } from '../components'
import style from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
        <Head>
            <title>Menjelang Hujan Web Store</title>
            <meta name="description" content="Menjelang Hujan Web Store" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main className={style.main}>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout
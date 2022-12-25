import Head from 'next/head'
import React from 'react'
import { Footer, Navbar } from '../components'
import style from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
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
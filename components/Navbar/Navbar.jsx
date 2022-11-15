import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={style.container}>
      <span className={style.hiddenSpan}></span>
      <div className={style.logo}>
        <Link href="/">
          Menjelang Hujan
        </Link>
      </div>
      <button type='button' className={style.cartContainer} onClick=''>
        <span className={style.cartQty}>69420</span>
        <AiOutlineShopping className={style.cartIcon} />
      </button>
    </div>
  )
}

export default Navbar
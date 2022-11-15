import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from '../components'
import { useStateContext } from '../../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className={style.container}>
      <span className={style.hiddenSpan}></span>
      <div className={style.logo}>
        <Link href="/">
          Menjelang Hujan
        </Link>
      </div>
      <button type='button' className={style.cartContainer} onClick={() => setShowCart(true)}>
        <span className={style.cartQty}>{totalQuantities}</span>
        <AiOutlineShopping className={style.cartIcon} />
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
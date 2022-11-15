import React from 'react'
import style from './Footer.module.css'
import Link from 'next/link'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={style.container}>
      <span className={style.whiteSpace}></span>
      <h3 className={style.copyright}>
        2022 
        <Link href='/' className={style.devs}> Menjelang Hujan </Link>
        All rights reserved
      </h3>
      <span className={style.whiteSpace}></span>
    </div>
  )
}

export default Footer
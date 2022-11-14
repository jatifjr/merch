import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <span className={style.whiteSpace}></span>
      <h3 className={style.copyright}>
        2022
        <a href="" className={style.devs}> Menjelang Hujan </a>
        All rights reserved
        </h3>
      <span className={style.whiteSpace}></span>
    </div>
  )
}

export default Footer
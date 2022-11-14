import React from 'react'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
      <span className={style.whiteSpace}></span>
      <h1 className={style.heading}>Selamat Datang</h1>
      <h3 className={style.subHeading}>Penikmat Hujan</h3>
      <span className={style.whiteSpace}></span>
    </div>
  )
}

export default Hero
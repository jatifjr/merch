import React from 'react'
import style from './Card.module.css'

const Card = ({ product: { slug, image, name, price } }) => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <img className={style.cardImg}></img>
            <h4 className={style.cardDesc}>$pName</h4>
            <h4 className={style.cardDesc}>$pPrice</h4>
        </div>
    </div>
  )
}

export default Card
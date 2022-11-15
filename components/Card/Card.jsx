import React from 'react'
import style from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../../lib/client'

const Card = ({ product: { image, name, slug, price } }) => {
  return (
    <div className={style.container}>
      <Link href={`/product/${slug.current}`}>
        <div className={style.card}>
          <img className={style.cardImg} src={urlFor(image && image[0])} alt="cardImage" />
          <h4 className={style.cardName}>{name}</h4>
          <h4 className={style.cardPrice}>Rp. {price}K</h4>
        </div>
      </Link>
    </div>
  )
}

export default Card
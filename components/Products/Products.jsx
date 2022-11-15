import React from 'react'
import style from './Products.module.css'
import Card from '../Card/Card'

const Products = () => {
  return (
    <div className={style.container}>
      <span className={style.whiteSpace}></span>
      <h1 className={style.heading}>Beri dukungan dengan membeli merchandise kami</h1>
      <span className={style.whiteSpace}></span>
    </div>
  )
}

export default Products
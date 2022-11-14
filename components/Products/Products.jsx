import React from 'react'
import style from './Products.module.css'
import Card from '../Card/Card'

const Products = ({ products }) => {
  return (
    <div className={style.container}>
      <span className={style.whiteSpace}></span>
      <h1 className={style.heading}>Support us by buying our merch</h1>
      <span className={style.whiteSpace}></span>
      <div className="card-container">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
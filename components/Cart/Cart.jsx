import style from './Cart.module.css'
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { CurrencyFormat } from '../../utilities/FormatCurrency'
import { useStateContext } from '../../context/StateContext'
import { urlFor } from '../../lib/client'
import getStripe from '../../lib/stripe'

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className={style.wrapper} ref={cartRef}>
      <div className={style.container}>
        <button type='button' className={style.cartHeading} onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className={style.heading}>Keranjang</span>
          <span className={style.cartItems}>({totalQuantities} item)</span>
        </button>

        {cartItems.length < 1 && (
          <div className={style.emptyCart}>
            <p className={style.emptyCartText}>Keranjang kosong, mulai belanja</p>
          </div>
        )}

        <div className={style.productContainer}>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id} className={style.product}>
              <img src={urlFor(item?.image[0])} className={style.productImage} />
              <div className={style.desc}>
                <div className={style.flexTop}>
                  <h1 className={style.productName}>{item.name}</h1>
                  <h2 className={style.detailsPrice}>{CurrencyFormat(item.price)}</h2>
                </div>
                <div className={style.flexBottom}>
                    <button className={style.cancel} onClick={() => onRemove(item)}>
                      X
                    </button>
                    <p className={style.quantityDesc}>
                      <span className={style.qtyBtn} onClick={() => toggleCartItemQuantity(item._id, 'rmv')}>
                        <AiOutlineMinus />
                      </span>
                      <span className={style.qtyQty}>{item.quantity}</span>
                      <span className={style.qtyBtn} onClick={() => toggleCartItemQuantity(item._id, 'add')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div>
            <div className={style.cartBottom}>
              <div className={style.subtotal}>
                <h2>Total</h2>
                <h2>{CurrencyFormat(totalPrice)}</h2>
              </div>
              <div className={style.btnContainer}>
                <button type='button' className={style.btnCheckout} onClick={handleCheckout}>
                  Bayar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
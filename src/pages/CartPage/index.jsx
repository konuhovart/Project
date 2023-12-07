import React from 'react'
import CartProduct from '../../components/CartProduct';
import { useCart } from '../../hooks/useCart';
import CartCalc from '../../components/CartCalc';
import Container from '../../UI/Container';
import { LuShovel } from 'react-icons/lu';
import s from './style.module.css'
import { NavLink } from 'react-router-dom';

export default function CartPage() {

  const cart = useCart();

  return (

    <Container>
      <div className={s.top}>
        <h2>Shopping cart</h2>
        <div className={s.back}><NavLink className={s.link} to={'/products/all'}>Back to the store <LuShovel className={s.shovel} /></NavLink></div>
      </div>
      <div className={s.cart}>

        <div className={s.left}>
          <div>
            {
              cart.length === 0
                ? <img className={s.noItem} src='/media/noItem.png ' alt='sadness' />
                : cart.map((item) => (<CartProduct key={item.id} {...item} />))
            }
          </div>
        </div>

        <div className={s.right}>
          <CartCalc />
        </div>

      </div>
    </Container>
  )
}

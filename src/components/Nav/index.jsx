import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'
import { MdForest } from 'react-icons/md';
import {  LuShovel } from 'react-icons/lu';
import {  BsFillTreeFill, BsTree } from 'react-icons/bs';
import Container from '../../UI/Container';
import { useCart } from "../../hooks/useCart";

export default function Nav() {

const cartProducts = useCart()
const totalItems = cartProducts.length;
  return (
    <Container>
    <nav className={s.nav}>
      <div className={s.logbtn}>
        <img src="/media/logo.png" alt="logo" />
        <NavLink className={s.btn} to={'/category'}>Catalog</NavLink>
      </div>
      <div className={s.icon}><BsTree/><BsFillTreeFill/><BsFillTreeFill/><MdForest/> <LuShovel/> </div>
      <div className={s.right}>
        <NavLink  to={''}>Main Page</NavLink>
        <NavLink  to={'/products/all'}>All products</NavLink>
        <NavLink  to={'/product/sale'}>All sales</NavLink>
      </div>
      <div className={s.cart}>
        <NavLink to={'/cart'}> <img src="/media/shopping.png" alt="cart" /></NavLink>
        {
          totalItems > 0 && (
            <div className={s.productCount}>{totalItems}</div>
          )
        }
      </div>
    </nav>
    </Container>
  )
}

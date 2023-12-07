import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../UI/Container';

import ProductItem from '../ProductItem';
import s from './style.module.css'


export default function HomeSale() {

  const products = useSelector(({ product }) => product.list)
  // Фильтрация товаров, у которых установлена скидка
  const saleProducts = products.filter((product) => product.discont_price !== null);
  const saleView = saleProducts.slice(0, 3);  // Выбор первых трех товаров для отображения на странице

  return (
    <Container>

      <h2>Sale</h2>
      <div className={s.sale}>
        {
          saleView.slice(0, 3).map(product => <ProductItem key={product.id} id={product.id} {...product} />)
        }
      </div>

    </Container>
  )
}


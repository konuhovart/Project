import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem'
import Container from '../../UI/Container';
import BackPage from '../../UI/BackPage';
import s from './style.module.css'
import ProductFilter from '../../components/ProductFilter';

export default function AllProductPage() {

  const { list } = useSelector((state) => state.product);

  return (
    <Container>
      <BackPage />
      <h2>All products</h2>
      <ProductFilter showCheckbox={true} />
      <div className={s.item}>{/* Отображение продуктов после фильтрации */}
        {
          list
            .filter(({ show }) => Object.values(show).every(elem => elem))
            .map(product => <ProductItem key={product.id} id={product.id} {...product} />)
        }
      </div>
    </Container>
  )
}


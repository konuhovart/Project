import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductFilter from '../../components/ProductFilter';
import ProductItem from '../../components/ProductItem';
import BackPage from '../../UI/BackPage';
import Container from '../../UI/Container';
import s from './style.module.css'


export default function CategoryProductsPage() {

  const { categoryId } = useParams();

  const products = useSelector(({ product }) => product.list);
  const result = products.filter(products => products.categoryId === +categoryId);
 

  return (


    <Container>
      <BackPage />
      <ProductFilter/>
      <div className={s.item}>
        {
          result.map(product => <ProductItem key={product.id} {...product} />)
        }
      </div>
    </Container>
  )
}


import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem'
import Container from '../../UI/Container';
import BackPage from '../../UI/BackPage';
import s from './style.module.css'
import ProductFilter from '../../components/ProductFilter';


export default function SalesPage() {

  const { list } = useSelector((state) => state.product);

  const saleProducts = list.filter((product) => product.discont_price !== null);

  return (
    <Container>
      <BackPage />
      <h2>Products with sale</h2>
      <ProductFilter showCheckbox={false}/>
      <div className={s.item}>
        {
          
          saleProducts
          .filter(({show}) => Object.values (show).every(elem => elem))
          .map(product => <ProductItem key={product.id} id={product.id} {...product} />)
        }
      </div>
    </Container>
  )
}



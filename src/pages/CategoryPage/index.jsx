import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../UI/Container';
import BackPage from '../../UI/BackPage';
import s from './style.module.css'

import CategoryProduct from '../../components/CategoryProduct';


export default function CategoryPage() {

  const { list } = useSelector((state) => state.category);

  return (
    <Container>
      <BackPage />
      <h2>Categories</h2>
      {
        <div className={s.item}>
          {
            list.map(category => <CategoryProduct key={category.id} {...category} />)
          }
        </div>
      }

    </Container>
  )
}

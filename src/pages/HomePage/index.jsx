import React from 'react'
import Dwarf from '../../components/Dwarf'
import NewSeason from '../../components/NewSeason'
import Container from '../../UI/Container'
import HomeSale from '../../components/HomeSale'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import CategoryProduct from '../../components/CategoryProduct'

export default function HomePage() {


  const { list } = useSelector((state) => state.category)



  return (
    <Container>

      <NewSeason />

      <div className={s.catalogTop}>
        <h2>Catalog</h2>
        <p><NavLink className={s.btn} to="/category">All categories</NavLink></p>
      </div>

      <div className={s.catalog}>
        {
          list.slice(0, 4).map(category => <CategoryProduct key={category.id} {...category} />)
        }
      </div>
      <Dwarf />
      <HomeSale />
    </Container>
  )
}

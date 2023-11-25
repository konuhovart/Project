import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { add } from '../../store/slice/cartSlice';
import s from './style.module.css'
const URLIMAGE = "http://localhost:3333/";

export default function ProductItem({ id, title, image, price, discont_price }) {

    const dispatch = useDispatch();



    const discountPrc = discont_price
        ? Math.round(
            ((price - discont_price) / price) * 100
        )
        : 0;


    return (
        <div className={s.productContainer} >

            <div className={s.imageContainer}>
                <Link to={`/product/${id}`}>  <img src={`${URLIMAGE}${image}`} alt={title} /> </Link>
                <button className={s.btn} onClick={() => dispatch(add(id))} >Add to cart</button>
            </div>

            <div className={s.price}>
                {discont_price ? (
                    <div className={s.productPrice}>
                        <p className={s.newPrice}>{discont_price}$</p>
                        <p className={s.oldPrice}>{price}$</p>
                        <p className={s.discountPrc}>-{discountPrc}%</p>
                    </div>
                ) : (
                    <div className={s.price}>
                        <p className={s.newPrice}>{price}</p>
                    </div>
                )}
            </div>
            <div className={s.title}>{title}</div>

        </div>
    )
}



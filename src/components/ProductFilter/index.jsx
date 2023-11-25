import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { order, priceFilter } from '../../store/slice/productSlice';
import Container from '../../UI/Container';
import s from './style.module.css'


export default function ProductFilter({ showCheckbox }) {

    const [price, setPrice] = useState({ min: 0, max: Infinity })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceFilter(price));
    }, [price, dispatch])

    const priceHandler = {
        min: value => +value,
        max: value => value === '' ? Infinity : +value
    }

    const changePrice = ({ target }) => {
        const { name, value } = target;
        setPrice(state => ({ ...state, [name]: priceHandler[name](value) }))
    }

    const orderOptions = [
        { id: 1, label: 'by name ->', value: 1 },
        { id: 2, label: 'by name <-', value: 2 },
        { id: 3, label: 'by price ->', value: 3 },
        { id: 4, label: 'by price <-', value: 4 },
    ]

    const orderHandler = (event) => {
        dispatch(order(+event.target.value));
    }
    // const orderHandler = ({ value }) => {
    //     dispatch(order(value));
    // };


    return (

        <Container className={s.container}>
            <div className={s.filter}>
                <p>Price</p>
                <input className={s.input}
                    type="number"
                    value={price.min === 0 ? '' : price.min}
                    name='min'
                    placeholder='from'
                    onChange={changePrice} />
                <input className={s.input}
                    type="number"
                    value={price.max === Infinity ? '' : price.max}
                    name='max'
                    placeholder='to'
                    onChange={changePrice} />


                {showCheckbox && (
                    <>
                        <p>Discounted items</p>
                        <input className={s.check}
                            type="checkbox"
                            onChange={(e) =>
                                dispatch(priceFilter({
                                    min: price.min,
                                    max: price.max,
                                    showDiscounted:
                                        e.target.checked
                                }))} />
                    </>
                )}

                <p>Sorted</p>
                <select className={s.sort} onChange={orderHandler}>
                    <option selected disabled >by default</option>
                    {
                        orderOptions.map(elem => (<option key={elem.id} value={elem.value}> {elem.label}</option>))
                    }
                </select>
            </div>

        </Container>

    )
}
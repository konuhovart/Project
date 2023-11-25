import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function NewSeason() {
    return (
        <div className={s.sale}>
            <div className={s.box}>
                <h2 className={s.sal}>Sale</h2>
                <h2 className={s.new}>New season</h2>
                <div className={s.btn}><NavLink to={'/product/sale'}>Sale</NavLink></div>
            </div>
            <div className={s.img}><img src="/media/cloudy.png" alt="clouds" /></div>
        </div>
    )
}

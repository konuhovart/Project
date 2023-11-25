import React from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { clearCart } from "../../store/slice/cartSlice";

import s from './style.module.css'



export default function CartCalc() {

    const dispatch = useDispatch();

  

    async function fetchAdd(data) {
        const resp = await fetch("http://localhost:3333/order/send", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const newPost = await resp.json()
       

        if (newPost.status === "OK") {
          dispatch(clearCart());
        }
        alert('Thanks for your order!')
        console.log(newPost);
    }

   

    const submit = (event) => {
        event.preventDefault();
        const { phone } = event.target;
        const data = {
            phone: phone.value
        };

        fetchAdd(data);
        event.target.reset()
        console.log(data);
    }

    const cart = useCart();
    const totalSum = cart.reduce((acc, { count, price, discont_price }) => {
        const productPrice = discont_price ? discont_price : price;
        return acc + (productPrice * count)
    }, 0)

    return (
        <div className={s.order}>
            <h2>Order details</h2>
            <p className={s.total}>Total: <span className={s.totalSum}>{totalSum}</span><span className={s.money}>$</span> </p>
            <form onSubmit={submit} className={s.info}>
                <input className={s.input} type="text" placeholder='Phone number' name="phone" />
                <button className={s.btn} type='submit'>Order</button>
            </form>
        </div>
    )
}


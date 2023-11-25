import React from 'react'
import s from './style.module.css'

export default function DiscDwarf() {

    async function fetchAdd(data) {
        const resp = await fetch("http://localhost:3333/order/send", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const newPost = await resp.json()
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
    }

    return (
        <div className={s.container}>
            <div className={s.discount}>
                <div className={s.dwarf}><img src="/media/dwarf.png" alt="dwarf" /></div>
                <div className={s.right}>
                    <p className={s.txt}>5% off</p>
                    <p className={s.txt2}>on the first order</p>
                    <form onSubmit={submit} className={s.info}>
                        <input className={s.input} type="text" placeholder='+49' name='phone' />
                        <button className={s.btn} type='submit'>Get a discount</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

import { useDispatch } from "react-redux";
import { clear, decr, incr } from "../../store/slice/cartSlice";
import Container from "../../UI/Container";
import s from './style.module.css'
const URLIMAGE = "http://localhost:3333/";


export default function CartProduct({ id, image, title, discont_price, count, price }) {

    const dispatch = useDispatch();

    return (
        <Container>
            <div className={s.item}>
                <div className={s.img}>
                    <img src={`${URLIMAGE}${image}`} alt={title} />
                </div>
                <div className={s.title}>
                    <p>{title}</p>

                    <div className={s.count} >
                        <button onClick={() => dispatch(decr(id))} >-</button>
                        <p>{count}</p>
                        <button onClick={() => dispatch(incr(id))} >+</button>
                    </div>
                </div>

                <div className={s.price}>
                    {
                        discont_price !== null
                            ? <p className={s.newPrice}>{discont_price * count} <span className={s.span}>$</span></p> : ' '
                    }
                    <p className={discont_price ? s.oldPrice : s.newPrice}>{price * count} <span className={s.span}>$</span></p>
                    <div><button className={s.clear} onClick={() => dispatch(clear(id))}>X</button></div>
                </div>
            </div>
        </Container>
    )
}
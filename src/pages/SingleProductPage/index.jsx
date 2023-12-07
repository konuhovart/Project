
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../UI/Container";
import BackPage from '../../UI/BackPage';
import s from "./style.module.css";
import { add } from "../../store/slice/cartSlice";
const URLIMAGE = "http://localhost:3333/";

export default function SingleProductPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector(({ product }) => product.list);

    if (products.length === 0) {
        return " ";
    }
    const product = products.find((item) => item.id === +id);

    if (!product) {
        return "Product not found";
    }

    const discount = product.discont_price && product.discont_price < product.price;
    const discountPrc = discount
        ? Math.round(
            ((product.price - product.discont_price) / product.price) * 100
        )
        : 0;

    return (
        <div>
            <Container>
                <BackPage />
                <div className={s.left}>
                    <h2>{product.title}</h2>
                </div>
                <div className={s.info}>
                    <div className={s.productImg}>
                        <img src={`${URLIMAGE}${product.image}`} alt={product.title} />
                    </div>
                    <div className={s.right}>
                        <div className={s.price}>
                            {discount && (
                                <div className={s.productPrice}>
                                    <p className={s.newPrice}>{product.discont_price}$</p>
                                    <p className={s.oldPrice}>{product.price}$</p>
                                    <p className={s.discountPrc}>-{discountPrc}%</p>
                                </div>
                            )}
                            {!discount && <p className={s.Price}>{product.price}$</p>}
                            <div className={s.bttn}><button className={s.btn} onClick={() => { dispatch(add(+id)); }}>Add to cart</button></div>
                        </div>
                        <hr className={s.line} />
                        <div className={s.description}>
                            <p>Description</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
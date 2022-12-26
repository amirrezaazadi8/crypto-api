import React from 'react';
import style from "./Coin.module.css";

const Coin = ({ name, image, price, symbol, marketCap, priceChange }) => {
    return (
        <div className={style.container}>
            <img className={style.image} src={image} alt={name}></img>
            <span className={style.name}>{name}</span>
            <span className={style.symbol}>{symbol.toUpperCase()}</span>
            <span className={style.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? style.greenPriceChange : style.redPriceChange}>% {priceChange.toFixed(2)}</span>
            <span className="">$ {marketCap.toLocaleString()}</span>
        </div>
    )
}

export default Coin;
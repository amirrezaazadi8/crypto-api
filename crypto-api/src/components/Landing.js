import React, { useState, useEffect } from 'react';
//API
import { getCoin } from '../services/api';
//components
import Loader from './Loader';
import Coin from './Coin';
// css
import style from "./Landing.module.css";

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data)
        }
        fetchAPI()
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value)
    };

    const searchCions = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            {
                coins.length
                    ? <div className={style.coinContainer}>
                        <input className={style.input} type="text" placeholder="Search" value={search} onChange={searchHandler}></input>
                        <div>
                            {
                                searchCions.map(coin =>
                                    <Coin key={coin.id}
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        price={coin.current_price}
                                        marketCap={coin.market_cap}
                                        priceChange={coin.price_change_percentage_24h}
                                    />)
                            }
                        </div>
                    </div>
                    : <Loader />
            }

        </>
    )
}

export default Landing;
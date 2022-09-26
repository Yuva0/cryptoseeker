import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import classes from './css/detailspage.module.css';

const DetailsPage = () => {

    const [cryptoCoin, setCryptoCoin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const params = useParams();
    useEffect(() => {
        let isMounted = true;
        const fetchCrypto = async() => {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+params.crypto);
            setCryptoCoin(res.data[0]);
            setIsLoading(false);
        };

        if(isMounted){
            fetchCrypto();
        }

        return(() => { isMounted = false })
    },[params.crypto]);

    const priceChngPrcntRound = Math.round(cryptoCoin.price_change_percentage_24h*100)/100;
    const currentPriceRound = Math.round(cryptoCoin.current_price*1000000)/1000000;

    let priceChangePrcntSpan;

    let loadingDiv;
    if(isLoading){
        loadingDiv = <div className={classes.loadingDiv}>Please Wait. Loading...</div>
    }

    if(priceChngPrcntRound < 0){
        priceChangePrcntSpan = <div>Price Change% : <span className={`${classes.listItemPriceChange} ${classes.redStatus}`}>{priceChngPrcntRound}%</span></div>
    }
    else{
        priceChangePrcntSpan = <div className={`${classes.listItemPriceChange} ${classes.greenStatus}`}>Price Change% : {priceChngPrcntRound}</div>
    }

    return (
        <div className={classes.detailsWrapper}>
            {isLoading? loadingDiv:
            <div className={classes.detailsContainer}>
                <div className={classes.detailsHeader}>
                    <div className={classes.detailsImage}><img src={cryptoCoin.image} alt={cryptoCoin.id}/></div>
                    <div className={classes.detailsName}><h1>{cryptoCoin.name}</h1></div>
                </div>
                <div className={classes.detailsheader}><h3>Details:</h3></div>
                <div>Symbol : {cryptoCoin.symbol}</div>
                <div>Rank : {cryptoCoin.market_cap_rank}</div>
                <div>Current Price : {currentPriceRound}</div>
                <div>Market Cap : {cryptoCoin.market_cap}</div>
                <div>Total Supply : {cryptoCoin.total_supply}</div>
                <div>Volume : {cryptoCoin.total_volume}</div>
                <div className={classes.twentyfourhourheader}><h3>24 Hour Period:</h3></div>
                <div>High : {cryptoCoin.high_24h}</div>
                <div>Low : {cryptoCoin.low_24h}</div>
                <div>Price Change : {cryptoCoin.price_change_24h}</div>
                {priceChangePrcntSpan}
                <div className={classes.detailsBackBtn} onClick={() => navigate(-1)}><h4><span>Back</span></h4></div>
            </div>}
        </div>
    );
};

export default DetailsPage;
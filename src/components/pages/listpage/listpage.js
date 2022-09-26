import { useEffect, useState } from 'react';

import classes from './css/listpage.module.css';
import axios from 'axios';
import ListItem from '../../listItem/listItem';
import SearchBar from '../../searchbar/SearchBar';
import ListHeader from '../../listHeader/ListHeader';

const ListPage = (props) => {
    const [cryptoList, setCryptoList] = useState([]);
    const [filteredCryptoList, setFilterCryptoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchCrypto = async() => {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc");
            setCryptoList(res.data);
            setFilterCryptoList(res.data);
            setIsLoading(false);
        };
        
        if(isMounted){
            fetchCrypto();
        }

        return () => { isMounted = false };
    },[]);

    // Search Filter
    const searchResultHandler = (value) => {
        const filteredCrypto = cryptoList.filter(crypto => {
            return crypto.id.toLowerCase().includes(value.toLowerCase()) || crypto.name.toLowerCase().includes(value.toLowerCase()) || crypto.symbol.toLowerCase().includes(value.toLowerCase());
        });
        setFilterCryptoList(filteredCrypto);
    };

    // Convert List to List Item
    let cryptoListItems;
    if(isLoading){
        cryptoListItems = <div>Loading List. Please Wait...</div>
    }

    else if(cryptoList.length !== 0){
        cryptoListItems = filteredCryptoList.map((cryptoItem, index) => <ListItem key={index} id={cryptoItem.id} name={cryptoItem.name} image={cryptoItem.image} currentPrice = {cryptoItem.current_price} rank={cryptoItem.rank} priceChangePercentage = {cryptoItem.price_change_percentage_24h} symbol={cryptoItem.symbol}/>);
    }

    else {
        cryptoListItems = <div>No List Found!</div>
    }

    return (
        <div className={classes.listContainer}>
            <div className={classes.listTitle}><h1>Crypto Seeker</h1></div>
            <div className={classes.listPageDetails}>
                <SearchBar searchResult={searchResultHandler}/>
                {/* <div className={classes.cryptoListContainer}>    */}
                    <ListHeader/>
                    {cryptoListItems}
                {/* </div> */}
            </div>
            <h6>(Created by Tanuj Sengupta)</h6>
        </div>
    );
};

export default ListPage;
import classes from './css/listItem.module.css';
import Arrow from '../ui/arrow/arrow';
import { Link } from 'react-router-dom';

const ListItem = (props) => {

    const priceChngPrcntRound = Math.round(props.priceChangePercentage*100)/100;
    const priceChngRound = Math.round(props.currentPrice*1000000)/1000000;

    let priceChangeSpan;
    if(priceChngPrcntRound < 0){
        priceChangeSpan = <span className={`${classes.listItemPriceChange} ${classes.redStatus}`}>{priceChngPrcntRound}</span>
    }
    else{
        priceChangeSpan = <span className={`${classes.listItemPriceChange} ${classes.greenStatus}`}>{priceChngPrcntRound}</span>
    }

    return (
        <Link to={{pathname:`/crypto/${props.id}`}}>
            <div className={classes.listItemContainer}>
                <div className={classes.listItemImage}>
                    <img src={props.image} alt={props.id}/>
                </div>
                <span className={classes.listItemName}>{props.name}</span>
                <span className={classes.listItemSymbol}>{props.symbol}</span>
                <span className={classes.listItemPrice}>{priceChngRound}</span>
                {priceChangeSpan}
                <span className={classes.listItemArrow}><Arrow/></span>
            </div>
        </Link>
    );
};

export default ListItem;
import classes from './css/ListHeader.module.css';

const ListHeader = (props) => {
    return (
        <div className={classes.listHeaderContainer}>
            <span className={classes.listHeaderImage}>Img</span>
            <span className={classes.listHeaderName}>Name</span>
            <span className={classes.listHeaderSymbol}>Symbol</span>
            <span className={classes.listHeaderPrice}>Price</span>
            <span className={classes.listHeaderPriceChange}>Price Change %</span>
            <span className={classes.listHeaderArrow}></span>
        </div>
    );
};

export default ListHeader;
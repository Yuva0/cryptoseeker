import classes from './css/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const searchCryptoHandler = (e) => {
        props.searchResult(e.target.value);
    }

    return (
        <div className={classes.searchBarContainer}>
            <input placeholder="Search" type="search" onChange={searchCryptoHandler}/>
           <div className={classes.searchBarBtn}><FontAwesomeIcon icon={faSearch}/></div>
        </div>
    );
};

export default SearchBar;
import classes from './css/arrow.module.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Arrow = () => {
    return (
        <div className={classes.arrowContainer}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );
};

export default Arrow;
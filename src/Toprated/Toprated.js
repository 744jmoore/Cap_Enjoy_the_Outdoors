import './Toprated.css';
import Rating from '../Rating/Rating';


const Toprated = () => {
    return (  
        <div className="Toprated">
            <h2>
                Explore Top Rated Parks
            </h2>
            <div className="Park-rating">
                <Rating />
                <Rating />
                <Rating />
                <Rating />
            </div>
        </div>
    );
}
 
export default Toprated;
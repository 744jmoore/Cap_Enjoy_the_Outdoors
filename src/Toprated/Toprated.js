import './Toprated.css';
import Rating from '../Rating/Rating';
import RatingParks from '../Rating/RatingParks'



const Toprated = () => {


    return (
        <div className="Toprated">

            <h2>
                Explore Top Rated Mountains
            </h2>
            <div className="Park-rating">
                <Rating />
            </div>
            <h2>
                Explore Top Rated Parks
            </h2>   
            <div className="Park-rating">
                <RatingParks />
            </div>

        </div>
    );
}

export default Toprated;
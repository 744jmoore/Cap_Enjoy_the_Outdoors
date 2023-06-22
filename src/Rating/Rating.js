import "./Rating.css";
import StarRating from "../StarRating/StarRating";

const Rating = () => {
  return (
    <div className="Rating">
      <img alt="placeholder"></img>
      <h3>Park Name</h3>
      <p>Review description</p>
      <StarRating rating={5}/>
    </div>
  );
}

export default Rating;

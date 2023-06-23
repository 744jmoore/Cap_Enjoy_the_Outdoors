import './RatingParks.css';
import StarRating from "../StarRating/StarRating";


const RatingParks = () => {

  const topRatedData = [
    {
      img: 'pics/NH.jpg',
      parkName: 'New Hampshire',
      review: 'Excellent accomodations and the trails were great too!!',
      rating: 5,
    },
    {
      img: 'pics/California.jpg',
      parkName: 'California',
      review: 'This was a wonderful place for the whole family.',
      rating: 5,
    },
    {
      img: 'pics/Florida.jpg',
      parkName: 'Florida',
      review: 'My children love this place! We will be back soon!',
      rating: 4,
    },
    {
     img: 'pics/Arizona.jpg',
      parkName: 'Arizona',
      review: 'Great walking trails and interesting historical information on this one!',
      rating: 5,
    },
  ];

  return (
    <div className="RatingContainer">
    {topRatedData.map(rating => (
    <div key={rating.img} className="Rating">  
                <img src={rating.img} alt={rating.parkName}/>
                <h3>{rating.parkName}</h3>
                <p>{rating.review}</p>
                <StarRating rating={rating.rating}/>
              
    </div>
  ))}</div>
  );
}

export default RatingParks;

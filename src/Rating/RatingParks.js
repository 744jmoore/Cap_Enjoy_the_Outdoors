import "./RatingParks.css";
import StarRating from "../StarRating/StarRating";


const RatingParks = () => {

  const topRatedData = [
    {
      img: 'pics/NH.png',
      parkName: 'New Hampshire',
      review: 'Excellent accomodations and the trails were great too!!',
      rating: 5,
    },
    {
      img: 'pics/California.png',
      parkName: 'California',
      review: 'This was a wonderful place for the whole family.',
      rating: 5,
    },
    {
      img: 'pics/Florida.png',
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
    <div className="Rating-Container">
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

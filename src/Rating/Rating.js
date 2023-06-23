import "./Rating.css";
import StarRating from "../StarRating/StarRating";

const Rating = () => {
  const topRatedData = [
    {
      img: "pics/EOsceola-StoryImg_2.jpg",
      parkName: "EOsceola Story",
      review: "Great time! We cannot wait to return!",
      rating: 5,
    },
    {
      img: "pics/Cannon-StoryImg_2.jpg",
      parkName: "Cannon",
      review: "Fantastic Views! - Well worth the hike!",
      rating: 5,
    },
    {
      img: "pics/Hale-StoryImg.jpg",
      parkName: "Hale Story",
      review: "Finished all 48 - Glad I saved this one for last!!",
      rating: 4,
    },
    {
      img: "pics/OwlsHead-StoryImg.jpg",
      parkName: "Owls Head",
      review:
        "Great walking trails and interesting historical information on this one!",
      rating: 5,
    },
  ];

  return (
    <div className="RatingContainer">
      {topRatedData.map((rating) => (
        <div key={rating.img} className="Rating">
          <img src={rating.img} alt={rating.parkName} />
          <h3>{rating.parkName}</h3>
          <p>{rating.review}</p>
          <StarRating rating={rating.rating} />
        </div>
      ))}
    </div>
  );
};

export default Rating;

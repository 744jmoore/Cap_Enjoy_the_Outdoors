import "./Rating.css";
import StarRating from "../StarRating/StarRating";
import Toprated from "../Toprated/Toprated";

const Rating = () => {

  const topRatedData = [
    {
      img: 'public/pics/EOsceola-StoryImg_2.jpg',
      parkName: 'EOsceola Story',
      review: 'Great time! We cannot wait to return!',
      rating: 4,
    },
    {
      img: 'public/pics/Cannon-StoryImg_2.jpg',
      parkName: 'Cannon',
      review: 'Fantastic Views! - Well worth the hike!',
      rating: 5,
    },
    {
      img: 'public/pics/Hale-StoryImg.jpg',
      parkName: 'Hale Story',
      review: 'Finished all 48 - Glad I saved this one for last!!',
      rating: 4,
    },
    {
     img: 'public/pics/OwlsHead-StoryImg.jpg',
      parkName: 'Owls Head',
      review: 'Great walking trails and interesting historical information on this one!',
      rating: 5,
    },
  ];

  return (
    <>
    {topRatedData.map(rating => {
    <div key={topRatedData.img} className="Rating">  
                <img src={topRatedData.img} />
                <h3>{topRatedData.parkName}</h3>
                <p>{topRatedData.review}</p>
                <StarRating rating={topRatedData.rating}/>
              
    </div>
  })}</>
  );
}

export default Rating;

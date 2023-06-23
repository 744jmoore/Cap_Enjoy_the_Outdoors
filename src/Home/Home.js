import Hero from "../Hero/Hero";
import Aboutus from "../AboutUs/Aboutus";
import Toprated from "../Toprated/Toprated";
import RatingParks from "../Rating/RatingParks";

function Home({ page, setPage }) {
  return (
    <div className="Home">
      <section className="hero-section">
        <Hero page={page} setPage={setPage} />
      </section>
      <Aboutus />
      <Toprated />
      <h2>Explore Top Rated Parks</h2>
      <div className="Park-rating">
        <RatingParks />
      </div>
    </div>
  );
}
export default Home;

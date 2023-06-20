import Hero from "../Hero/Hero";
import Aboutus from "../AboutUs/Aboutus";
import Toprated from "../Toprated/Toprated";
import Navigation from "../Navigation/Nav";
import Dropdown from "../Dropdown/Dropdown";

function Mountains() {

  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Mountains</h1>
          <Dropdown />
          <button>View Information</button>
          <button>Clear All</button>
        </div>
      </div>
    </div>
  );
}
export default Mountains;

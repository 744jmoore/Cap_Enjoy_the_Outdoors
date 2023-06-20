
import Hero from './Hero/Hero'
import Aboutus from './AboutUs/Aboutus';
import Toprated from './Toprated/Toprated';


function Home() {

return (
    <div className="Home">

      <section className="hero-section">
      <Hero />
      </section>
      <Aboutus />
      <Toprated />
    </div>
  );
}
export default Home;

import Hero from '../Hero/Hero'
import Aboutus from '../AboutUs/Aboutus';
import Toprated from '../Toprated/Toprated';


function Home({page, setPage}) {

return (
    <div className="Home">

      <section className="hero-section">
      <Hero page={page} setPage={setPage}/>
      </section>
      <Aboutus />
      <Toprated />
     
    </div>
  );
}
export default Home;
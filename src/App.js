
//*import './App.css';*//
import Navigation from './Navigation/Nav';
import Hero from './Hero/Hero'
import Aboutus from './AboutUs/Aboutus';
import Toprated from './Toprated/Toprated';

function App() {

  return (
    <div className="App">
      <Navigation />
      <section className="hero-section">
      <Hero />
      </section>
      <Aboutus />
      <Toprated />
      {/* test comment */}
    </div>
  );
}
export default App;
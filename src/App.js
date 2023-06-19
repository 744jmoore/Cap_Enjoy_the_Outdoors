
//*import './App.css';*//
import Navigation from './Navigation/Nav';
import Hero from './Hero/Hero'
import Aboutus from './AboutUs/Aboutus';

function App() {

  return (
    <div className="App">
      <Navigation />
      <section className="hero-section">
      <Hero />
      </section>
      <Aboutus />
    </div>
  );
}
export default App;
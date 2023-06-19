
//*import './App.css';*//
import Navigation from './Navigation/Nav';
import Hero from './Hero/Hero'
function App() {

  return (
    <div className="App">
      <Navigation />
      <section className="hero-section">
      <Hero />
      </section>
    </div>
  );
}
export default App;
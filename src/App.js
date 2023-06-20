
//*import './App.css';*//
import Navigation from './Navigation/Nav';
import Hero from './Hero/Hero'
import Aboutus from './AboutUs/Aboutus';
import Toprated from './Toprated/Toprated';
import { useState } from 'react';

function App() {
const [page, setPage] = useState()
  return (
    <div className="App">
      <Navigation />
      <section className="hero-section">
      <Hero />
      </section>
      <Aboutus />
      <Toprated />
    </div>
  );
}
export default App;
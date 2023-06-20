//*import './App.css';*//
import Navigation from "./Navigation/Nav";
import Hero from "./Hero/Hero";
import Aboutus from "./AboutUs/Aboutus";
import Toprated from "./Toprated/Toprated";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [page, setPage] = useState("about");
  const pages = { 
    home: <Home />,
    about: <Aboutus />

  };

  return (
    <div className="App">
      <Navigation page={page} setPage={setPage} />
      {pages[page]}
    </div>
  );
}
export default App;

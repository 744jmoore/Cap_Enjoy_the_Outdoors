//*import './App.css';*//
import Navigation from "./Navigation/Nav";
import { useState } from "react";
import Home from "./Home/Home";
import Mountains from "./Mountains/Mountains";

function App() {
  const [page, setPage] = useState("home");
  const pages = { 
    home: <Home page={page} setPage={setPage}/>,
    mountains: <Mountains />
 
  };

  return (
    <div className="App">
      
      <Navigation page={page} setPage={setPage} />
      {pages[page]}
    </div>
  );
}
export default App;

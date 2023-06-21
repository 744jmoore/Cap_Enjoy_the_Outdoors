import { useState, useEffect } from "react";
import "./NationalParks.css";
import ParksTable from "../ParksTable/ParksTable";


const NationalParks = () => {
  
 const [renderParks, setRenderParks] = useState(false); 

 const handleClick = () => {
  setRenderParks(!renderParks)
 }

  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Parks</h1>
           
           {renderParks ? <button onClick={(handleClick)}>Hide Results</button> 
           : <button onClick={(handleClick)}>View all Parks</button>}
        </div>
      </div>
      {renderParks ? <ParksTable />  : null}
    </div>
  );
};

export default NationalParks;

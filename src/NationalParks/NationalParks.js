import { useState, useEffect } from "react";
import "./NationalParks.css";
import ParksTable from "../ParksTable/ParksTable";
import ParksFilter from "../ParksFilter/ParksFilter";
import ParksLocationTable from "../ParksLocationTable/ParksLocationTable";

const NationalParks = () => {
  const [renderParks, setRenderParks] = useState(false);
  const [location, setLocation] = useState([]);
  const [locationSelected, setLocationSelected] = useState("")
  const handleClick = () => {
    setRenderParks(!renderParks);
  };

  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Parks</h1>
          {renderParks ? (
            <button onClick={handleClick}>Hide Results</button>
          ) : (
            <div>
              <button onClick={handleClick}>View all Parks</button> <br />
              <ParksFilter location={location} setLocation={setLocation} setLocationSelected={setLocationSelected} locationSelected={locationSelected}/>
            </div>
          )}
        </div>
      </div>
      {locationSelected ? <ParksLocationTable locationSelected={locationSelected} setLocationSelected={setLocationSelected} /> : null}      
   
      {renderParks ? <ParksTable /> : null}
    </div>
  );
};

export default NationalParks;

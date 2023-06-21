import { useState, useEffect } from "react";
import "./NationalParks.css";
import ParksTable from "../ParksTable/ParksTable";
import ParksFilter from "../ParksFilter/ParksFilter";

const NationalParks = () => {
  const [renderParks, setRenderParks] = useState(false);

  const handleClick = () => {
    setRenderParks(!renderParks);
  };

  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("./locations.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLocation(response);
      });
  }, []);
  console.log(location);
//LEFT OFF HERE ON 6/21//
  const option = location.map((item) => {
    <option>{item}</option>;
    console.log(item);
  });

  console.log(option);
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
              <button>Search by Location</button>
            </div>
          )}
        </div>
      </div>

      <form className="parks-filter">
        <select placeholder="Filter">
          <option disabled="">Select One</option>
          {location.map((item) => {
            {item===undefined<option>{item}</option>;
            console.log(item);
          })}
        </select>
      </form>

      {renderParks ? <ParksTable /> : null}
    </div>
  );
};

export default NationalParks;

import { useState, useEffect } from "react";
import "./NationalParks.css";

const NationalParks = () => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    fetch("./nationalparks.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setParks(response.parks);
      });
  }, []);

  // console.log(parks)

  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Parks</h1>
          <button>View all Parks</button>
        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>Location Name</th>
              <th>City</th>
              <th>State</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {parks.map((park) => (
              <tr key={park.LocationID}>
                <td>{park.LocationName}</td>
                <td>{park.City}</td>
                <td>{park.State}</td>
                <td>{park.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default NationalParks;

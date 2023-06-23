import "./ParksLocationTable.css";
import { useState, useEffect } from "react";

const ParksLocationTable = ({ locationSelected, setLocationSelected }) => {
  const [parks, setParks] = useState([]);
  const [filteredParkLocations, setFilteredParkLocations] = useState({});
  useEffect(() => {
    fetch("./nationalparks.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setParks(response.parks);
        setFilteredParkLocations(
          response.parks.filter(
            (locationItem) => locationItem.State === locationSelected
          )
        );
      });
  }, [locationSelected]);

  return (
    <div className="table-container">
      {filteredParkLocations && filteredParkLocations[0] ? (
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
            {filteredParkLocations.map((park) => (
              <tr key={park.LocationID}>
                <td>{park.LocationName}</td>
                <td>{park.City}</td>
                <td>{park.State}</td>
                <td>{park.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ParksLocationTable;

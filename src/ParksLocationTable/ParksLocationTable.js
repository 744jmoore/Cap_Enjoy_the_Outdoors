import "./ParksLocationTable.css";
import { useState, useEffect } from "react";

const ParksLocationTable = ({location, setLocation}) => {
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

const filteredParkLocations = parks.filter(locationItem => locationItem.State === {location})
console.log({filteredParkLocations, location})


  return (
    <div className="table-container">
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
    </div>
  );
};

export default ParksLocationTable;

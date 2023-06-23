import "./ParksTable.css";
import { useState, useEffect } from "react";

const ParksTable = () => {
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

export default ParksTable;

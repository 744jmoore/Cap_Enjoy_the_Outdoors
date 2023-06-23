import "./ParksFilter.css";
import { useEffect } from "react";

const ParksFilter = ({
  location,
  setLocation,
  locationSelected,
  setLocationSelected,
}) => {
  useEffect(() => {
    fetch("./locations.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLocation(response);
      });
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setLocationSelected(event.target.value);
  };

  return (
    <form className="parks-filter">
      <select placeholder="Filter" onChange={handleChange}>
        <option disabled="">Search by Location</option>
        {location.map((item) =>
          item ? <option key={item}>{item}</option> : null
        )}
      </select>
    </form>
  );
};

export default ParksFilter;

import { useState, useEffect } from "react";
import "./Dropdown.css";

function Dropdown({ mountain, setMountain }) {
  const [data, setData] = useState([]);

  function getData() {
    fetch("./mountains.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    setMountain(event.target.value);
  };

  return (
    <form className="mountain-picker">
      <select placeholder="Pick a Mountain" onChange={handleChange}>
        <option disabled="">Pick a mountain!</option>
        {data.mountains &&
          data.mountains.map &&
          data.mountains.map((mountain) => (
            <option key={mountain.name}>{mountain.name}</option>
          ))}
      </select>
    </form>
  );
}
export default Dropdown;

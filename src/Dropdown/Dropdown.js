//*import './App.css';*//
import { useState, useEffect } from "react";

function Dropdown() {
  
    const [data, setData] = useState([]);
  function getData() {
    fetch("./mountains.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
        console.log(data.mountains)
      });
  }
  useEffect(() => {
    getData();
  }, []);


    return (
        <form className="mountain-picker">
          <select placeholder="Add an ingredient">
            <option disabled="">Pick a mountain!</option>
            {data.mountains && data.mountains.map && data.mountains.map(mountain => (
            <option key={mountain.name}>{mountain.name}</option>
            ))}
          </select>
          </form>
    )
  };
export default Dropdown;
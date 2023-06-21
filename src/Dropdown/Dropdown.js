//*import './App.css';*//
import { useState, useEffect } from "react";
import MountainCard from "../Mountains/MountainCard";

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

  const [mountain, setMountain] = useState("Pick a Mountain!")
  const handleChange = (event) => {setMountain(event.target.value)
    let pickedMountain = (event.target.value)

  }
  console.log(mountain)


    return (
        <form className="mountain-picker">
          <select placeholder="Pick a Mountain" onChange={handleChange}>
            <option disabled="">Pick a mountain!</option>
            {data.mountains && data.mountains.map && data.mountains.map(mountain => (
            <option key={mountain.name}>{mountain.name}</option>
            ))}
          </select>
        </form>
    )
  };
export default Dropdown;
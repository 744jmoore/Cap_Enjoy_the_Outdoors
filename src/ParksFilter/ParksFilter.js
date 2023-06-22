import "./ParksFilter.css"
import { useState, useEffect } from "react";

const ParksFilter = ({location, setLocation}) => {
    
    // const [location, setLocation] = useState([]);

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
        setLocation(event.target.value)
        console.log(event.target.value)
         }
        

    /* //*mountains.filter(mountainItem => mountainItem.name === mountain)
        console.log({filteredMountains, mountains, mountain})*/

    return ( 
        <form className="parks-filter">
        <select placeholder="Filter" onChange={handleChange}>
          <option disabled="">Search by Location</option>
          {location.map((item) => (
            item ? <option key={item}>{item}</option> : null
          ))}
        </select>
      </form>
     );
}
 
export default ParksFilter;
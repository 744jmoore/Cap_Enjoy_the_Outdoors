import "./ParksFilter.css"
import { useState, useEffect } from "react";

const ParksFilter = () => {
    
const [location, setLocation] = useState([]);
    
    useEffect(() => {
        fetch("./locations.json")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setLocation(response)
            });
    }, []);
console.log(location)

console.log(locationStrings = location.toString)

    /* //*mountains.filter(mountainItem => mountainItem.name === mountain)
        console.log({filteredMountains, mountains, mountain})*/

    return ( 
        {/* <form className="parks-filter">
          <select placeholder="Filter" onChange={handleChange}>
            <option disabled="">Select One</option>
            {data.mountains && data.mountains.map && data.mountains.map(mountain => (
            <option key={mountain.name}>{mountain.name}</option>
            ))}
          </select>
        </form> */}
     );
}
 
export default ParksFilter;
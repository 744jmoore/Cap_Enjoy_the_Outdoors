import "./MountainCard.css";
import { useState, useEffect } from "react";

const MountainCard = ({mountain}) => {

    const [data, setData] = useState([]);
    function getData() {
        fetch("./mountains.json")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setData(response)
            });
    }
    useEffect(() => {
        getData();
    }, []);

    const testMountain = {mountain}
    console.log(testMountain);
    return (
        
        <>
            {data.mountains && data.mountains.map && data.mountains.filter(mountain => mountain.name===testMountain).map(filteredMountain => (
                <div className="MountainCardInfo" key={filteredMountain.name}>
                    <img src={'./pics/' + filteredMountain.img} alt={filteredMountain.name} />
                    <h3>{filteredMountain.name}</h3>
                    <p>{filteredMountain.desc}</p>
                    <p>{filteredMountain.elevation} ft.</p>
                </div>
            ))}  
                  </>
    );
}

export default MountainCard;
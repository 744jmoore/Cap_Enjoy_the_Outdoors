import "./MountainCard.css";
import { useState, useEffect } from "react";

const MountainCard = () => {

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
        <>
            {data.mountains && data.mountains.map && data.mountains.map(mountain => (
                <div className="MountainCardInfo" key={mountain.name}>
                    <img src={'./pics/' + mountain.img} alt={mountain.name} />
                    <h3>{mountain.name}</h3>
                    <p>{mountain.desc}</p>
                    <p>{mountain.elevation} ft.</p>
                </div>
            ))}  
                  </>
    );
}

export default MountainCard;
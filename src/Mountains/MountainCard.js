import "./MountainCard.css";
import { useState, useEffect } from "react";

const MountainCard = ({ mountain }) => {
  const [mountains, setMountains] = useState([]);

  useEffect(() => {
    fetch("./mountains.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMountains(response.mountains);
      });
  }, []);
  const filteredMountains = mountains.filter(
    (mountainItem) => mountainItem.name === mountain
  );
  console.log({ filteredMountains, mountains, mountain });
  return (
    <>
      {filteredMountains.map((filteredMountain) => (
        <div className="MountainCardInfo" key={filteredMountain.name}>
          <img
            src={"./pics/" + filteredMountain.img}
            alt={filteredMountain.name}
          />
          <h3>{filteredMountain.name}</h3>
          <p>{filteredMountain.desc}</p>
          <p>{filteredMountain.elevation} ft.</p>
        </div>
      ))}
    </>
  );
};

export default MountainCard;

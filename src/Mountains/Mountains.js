import Dropdown from "../Dropdown/Dropdown";
import Toprated from "../Toprated/Toprated";
import MountainCard from "./MountainCard";
import "./Mountains.css";
import { useState } from "react";

function Mountains() {
  const [mountain, setMountain] = useState("");
  console.log(mountain);
  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Mountains</h1>
          <Dropdown mountain={mountain} setMountain={setMountain} />
        </div>
      </div>
      <MountainCard mountain={mountain} setMountain={setMountain} />
      <Toprated />
    </div>
  );
}
export default Mountains;

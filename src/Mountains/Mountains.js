import Hero from "../Hero/Hero";
import Aboutus from "../AboutUs/Aboutus";
import Toprated from "../Toprated/Toprated";
import Navigation from "../Navigation/Nav";
import Dropdown from "../Dropdown/Dropdown";
import MountainCard from "./MountainCard";
import "./Mountains.css";
import { useState } from "react";

function Mountains() {

  const [mountain, setMountain] = useState("Bondcliff")
  console.log(mountain);
  return (
    <div className="Mountains">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Explore Mountains</h1>
          <Dropdown mountain = {mountain} setMountain={setMountain}/>

        </div>
      </div>
      <MountainCard mountain={mountain} setMountain={setMountain}/>
    </div>
  );
}
export default Mountains;

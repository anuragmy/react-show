import React from "react";
import Carrousel from "./Carrousel";
import Timeuntil from "./Timeuntil";

const Featured = () => {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <Timeuntil />
    </div>
  );
};

export default Featured;

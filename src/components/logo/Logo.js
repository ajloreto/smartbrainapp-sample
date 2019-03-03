import React from "react";
import Tilt from "react-tilt";
import brain from "./tapao.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 160, width: 150 }}
      >
        <div className="Tilt-inner pa1">
          <img alt="logo" src={brain} width="120px" height="150px" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

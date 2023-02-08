import React from "react";
import cancelPng from "../thumbnails/x-button.png";
const MoreDetails = () => {
  const closeForm = () => {
    document.getElementById("moreDetailsContainer").style.width = "0";
    document.getElementById("moreDetailsContainer").style.height = "0";
    document.getElementById("moreDetailsContainer").style.transform =
      "scale(0)";
  };
  return (
    <div className="moreDetailsContainer" id="moreDetailsContainer">
      <header>
        <h1>Details</h1>
        <button className="cancelBtn" onClick={() => closeForm()}>
          <img src={cancelPng} alt="cencelBtn" />
        </button>
      </header>
      <div>
        <span>Name: xzy</span>
        <span>Course: BTech CSE</span>
        <span>Semester: 6th</span>
        <span>Object: xyzsdf</span>
        <span>Benifit to society: nvncvjhfhfh</span>
        <span>methodology: xyzsdd</span>
        <span>Out come: shdhsjjd</span>
      </div>
    </div>
  );
};
export default MoreDetails;

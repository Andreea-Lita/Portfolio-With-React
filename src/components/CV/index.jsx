import React from "react";
import "./style.css";
import myCv from "../Images/CV.ANDREEA-M.pdf"

function CV() {
  const openCv = () => {
    window.open(myCv);
  };
  return (
    <div className="cv">
      {/* <p>Click the down button called "Open CV" to view CV:</p> */}
       <button onClick={openCv}>Click this to Open CV</button>
      <a href={myCv} target="_blank">Open PDF</a>
    </div>
  );
}

export default CV;

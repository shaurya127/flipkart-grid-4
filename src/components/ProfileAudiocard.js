import React from "react";

const Profileaudiocard = (props) => {
  return (
    <div className="row pa-container" style={{flexDirection:"row"}}>
      <div className="pa-img-container">
        <img src={props.logo} alt={props.title} className="pa-img"></img>
      </div>
      <div className="pa-title">{props.title}</div>
    </div>
  );
};

export default Profileaudiocard;

import React from "react";

const Creatorcontainer = (props) => {
  return (
    <div>
      <div className="crt-author-details">
        <div className="crt-author-img-container">
          <img
            className="crt-author-img"
            src={props.authorImg}
            alt="logo"
          ></img>
        </div>
        <div className="crt-author-title-container">
          <div className="crt-author-title">{props.author}</div>
        </div>
      </div>
    </div>
  );
};

export default Creatorcontainer;

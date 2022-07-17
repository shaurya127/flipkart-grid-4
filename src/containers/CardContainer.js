import React from "react";

const Cardcontainer = (props) => {
  return (
    <div>
      <div className="m-card-container">
        <div className="m-card-title-container">
          <div className="m-card-title-sub-container" style={{display:"flex",flexWrap:"wrap"}}>
            <div className="m-card-suffix" style={{fontSize:"1.2rem",letterSpacing:"4px"}}>{props.suffix}</div>
            <div className="m-card-title" style={{fontSize:"1.2rem"}}>{props.title}</div>
            {props?.prefix ? (
              <>
                <div className="m-card-suffix mx-2"  style={{fontSize:"1.2rem"}}> IN </div>
                <div className="m-card-title mx-2" style={{fontSize:"1.2rem"}}>{props?.prefix}</div>
              </>
            ) : null}
          </div>
          {props?.extra ? (
            <div className="m-card-title-extra"  style={{fontSize:"1.2rem"}}>
              {props?.extra || "view more results &gt;"}
            </div>
          ) : null}
        </div>
        <div className="m-card-content"  style={{fontSize:"1.2rem"}}>{props?.children}</div>
      </div>
    </div>
  );
};


export default Cardcontainer;

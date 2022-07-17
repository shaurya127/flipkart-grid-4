import React, { useState } from "react";
import "./Pricerange.css";
const Pricerange = ({ label }) => {
  const [lowest, setlowest] = useState(10);
  const [highest, sethighest] = useState(10);


  return (
    <div className="pricerange">
      <div className="counter">
        <label for="quantity">Lowest</label><br />
        <div style={{ display: "flex", height: "2rem" }}>
          <input type="text" value={lowest} />
          <div style={{ width: "10px", marginTop: "-10px" }}>
            <div className="upbtn" style={{ marginBottom: "-15px",cursor:"pointer" }} onClick={()=>setlowest(lowest+1)}></div>
            <div className="downbtn" style={{cursor:"pointer"}} onClick={()=>setlowest(lowest-1)}></div>
          </div>
        </div>
      </div>
      <div className="counter">
        <label for="quantity">Highest</label><br />
        <div style={{ display: "flex", height: "2rem" }}>
          <input value={highest} />
          <div style={{ width: "10px", marginTop: "-10px" }}>
            <div className="upbtn" style={{ marginBottom: "-15px",cursor:"pointer"}} onClick={()=>sethighest(highest+1)}></div>
            <div className="downbtn" style={{cursor:"pointer"}} onClick={()=>sethighest(highest-1)}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricerange;

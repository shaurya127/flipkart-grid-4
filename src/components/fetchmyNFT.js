import React from "react";

import "../assets/css/home.css";
import Nftslist from "./NFTsList";
import sqr from "../assets/images/space1.png";
import cir from "../assets/images/cir.jpg";

const FetchMyNFT = (props) => {
  return (
    <div>
      <div className="hero-container my-2">
        <div className="hero my-4">

        <div style={{width:"100%",height:"100%",objectFit:"contain"}}>
        
        </div>
        
          <h1 style={{ color: "#cccccc" }}>My Bids</h1>
        </div>
       
       
      </div>
      <div>
        <br />
        <br />
       
        <Nftslist sqr={sqr} cir={cir}></Nftslist>
      </div>

     
      <div>
        <br />
      </div>
      

      <div>
        <br />
      </div>
      
      <div style={{ height: "250px" }}></div>
     
    </div>
  );
};

export default FetchMyNFT;

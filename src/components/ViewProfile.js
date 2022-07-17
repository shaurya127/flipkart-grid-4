import React, { useState } from "react";
import "../assets/css/profile.css";
import cir from "../assets/images/bharat.jpeg";
import Nftslist from "./NFTsList";
// import Creatorslist from "./CreatorsList";
import sqr from "../assets/images/space1.png";
import bharatt from '../assets/images/bharatt.png'
import Footer from './Footer'
const Viewprofile = (props) => {

  const [tabKey, setTabKey] = useState(0);
  return (
    <div>
      <div className="profile-banner" style={{ backgroundImage: `url(${bharatt})` }}>
        <div className="profile-banner-mask"></div>
        <div className="profile-container-circle">
          <img src={cir} alt="pro" className="profile-img"></img>
        </div>
      </div>
      <div className="profile-details-container">
        <div className="pair-container">
          <div>
            <div className="pair-container"> 
            </div>
        </div>
      </div>
      <div className="intro-contianer">
        <div className="profile-name" style={{marginTop:"90px"}}>Bharat Thakur</div>
        <div className="profile-desc">
          A TWO LINE SIMPLE BIO ABOUT THE ARTIST, AND THEIR STYLE AND
          INSPIRATIONS & MOTIVATIONS
        </div>
      </div>
      <div className="profile-tab-container">
        <div
          className={tabKey === 0 ? "tab-btn-active" : "tab-btn-inactive"}
          onClick={() => setTabKey(0)}
        >
          CREATIONS
        </div>
        <div
          className={tabKey === 1 ? "tab-btn-active" : "tab-btn-inactive"}
          onClick={() => setTabKey(1)}
        >
          COLLECTIONS
        </div> 
      </div>      
    </div>
      <div> 
        {tabKey===0&&<Nftslist sqr={sqr} cir={cir}></Nftslist>}
        {tabKey===1&&<Nftslist sqr={sqr} cir={cir}></Nftslist>}
      </div>
      <Footer/>
      
    </div>
  );
};

export default Viewprofile;
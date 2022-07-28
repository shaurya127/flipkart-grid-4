import React,{useEffect,useState} from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingcardimg1 from "../assets/images/landingimg1.png"
import Landingimg from "../assets/images/Rectangle 728.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import Heart from "../assets/images/cil_heart.png";
import axios from "axios";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const Landingdiv = styled.div`
background-image: linear-gradient(to right top, #101824, #004a67, #008487, #00bd6e, #a8eb12); 

  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  height: 58vh;
  width: 19vw;
  padding: 0.8rem;
  object-fit: cover;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;
  margin-left:.5rem;
  margin-right:.5rem;
  @media (max-width: 600px) {
    width: 100%;
  }
 
  &:hover {
    // transform: scale(1.75);
    opacity: 1;
    box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
    border-radius: 24px;
    height: 58vh;
    width: 19vw;
    padding: 0.8rem;
    object-fit: cover;
    display: flex;
    align-items: start;
    flex-direction: column;
    margin-top: 2rem;
    margin-left:.5rem;
    margin-right:.5rem;
  }

`;

const Imagecont = styled.div`
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
  background: url(${Landingcardimg1});
  background-size: cover;
  height:35vh;
  // -webkit-box-shadow: 0 8px 6px 10px black;
  //  -moz-box-shadow: 0 8px 6px 10px black;
  // box-shadow: 5px 8px 6px 10px black inset;
  &:hover {
  }
`;

const Btn = styled.div`
  color: black;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  &:hover {
    box-shadow: 0px 0px 20px #9e55cb;
  }
`;

const LandingCard = (props) => {
 
  const p = props.image; 
  // console.log(p);
  return (
    <Landingdiv>
    
      <Imagecont style={{
        background: `url(${p})`,
        backgroundSize: "cover"
        }}>
        <div
          style={{
            marginTop: "60%",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            padding: "1rem 1rem",
          }}
        >
          
        </div>
      </Imagecont>
      <div style={{ marginTop: "3vh", display: "flex", alignItems: "center",height:"8vh" }}>
        
        <div style={{ width: "80%", textAlign: "left", marginLeft: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{props.name || <Skeleton />}</div>
          <div className="text-truncate" style={{ color: "white", fontSize: "0.7rem" }}>
            Seller:  {props.owner}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "0.5rem" }}>
        <div
          style={{
            background: "black",
            width: "100%",
            height: "8vh",
            borderRadius: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1rem",
            fontSize: ".7rem",
            fontWeight: "500",
          }}
        >
          <div style={{ display: "flex" }}>
           
            <div style={{ marginLeft: "0.4rem" }}>Warranty In days: {props.Warranty}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "0.4rem" }}>Price: {props.price}</div>
            
          </div>
          
        </div>
      </div> 
    </Landingdiv>
  );
};




export default LandingCard;

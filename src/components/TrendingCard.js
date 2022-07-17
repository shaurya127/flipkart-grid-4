import React from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import Heart from "../assets/images/cil_heart.png";

const Landingdiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(186, 104, 200, 0.53) 100%
  );
  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  height: 22rem;
  width: 16rem;
  margin:1rem;
  padding: 0.8rem;
  object-fit: cover;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;
`;

const Imagecont = styled.div`
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
  background: url(${Landingcardimg});
  height:15rem;
  
   &:hover{

   }
`;

const Btn=styled.div`
color:black;
border-radius: 30px;
width:max-content;
&:hover{
  background: #75155E;
box-shadow: 2px 4px 50px #414141;
border-radius: 30px;
width:max-content;
padding: 0rem 1rem;
color:white;
}
`

const TrendingCard = () => {
  return (
    <Landingdiv>
      {/* <img
        style={{
          objectFit: "contain",
          width: "100%",
          borderRadius: ".5rem",
        }}
        src={Landingcardimg}
        alt="landingimg"
      /> */}
      <Imagecont>
        <div style={{marginTop:"59%",display:"flex",alignItems:"center",width:"100%",justifyContent:"center"}}><Btn>
          Place bid
          </Btn></div>
      </Imagecont>
      <div
        style={{ marginTop: "1.4rem", display: "flex", alignItems: "center" }}
      >
        <img
          style={{ objectFit: "contain", width: "2rem" }}
          src={Landingowner}
          alt="landingimg"
        />
        <div style={{ width: "80%", textAlign: "left", marginLeft: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
            *Insert Artwork title*
          </div>
          <div style={{ color: "#A9A9A9", fontSize: "0.7rem" }}>
            created by @brightmac
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "0.5rem" }}>
        <div
          style={{
            background: "black",
            width: "100%",
            height: "3rem",
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
            <img src={Eth} alt="" />
            <div style={{ marginLeft: "0.4rem" }}>0.99 ETH</div>
          </div>
          <div>4d 16h 32m 10s</div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: ".6rem",
        }}
      >
        <div style={{ width: "30%", display: "flex", alignItems: "center" }}>
          <img src={Heart} alt="like" />
          <div style={{ color: "black", marginLeft: ".3rem" }}>365</div>
        </div>
      </div>
    </Landingdiv>
  );
};

export default TrendingCard;

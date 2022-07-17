import React from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingcardimg1 from "../assets/images/landingimg1.png"
import Landingimg from "../assets/images/Rectangle 728.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images//Ethereum (ETH) (1).png";
import Heart from "../assets/images/cil_heart.png";


const Landingdiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );

  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  height: 60vh;
  width: 19vw;
  padding: 0.8rem;
  object-fit: cover;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;
  margin-left:.5rem;
  margin-right:.5rem;
  justify-content:center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Imagecont = styled.div`
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
  height:32vh;
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

const Heading2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: .7rem;
line-height: 160%;
/* or 22px */


color: #A9A9A9;
`

const Lowertext = styled.div`
font-style: normal;
font-weight: normal;
font-size: .8rem;
line-height: 160%;
/* or 29px */

text-align: center;

color: #FFFFFF;
margin-top:5%;

`
const LandingCard = (props) => {
  console.log(props.image, 'this is the image url');
  console.log(props.title, 'this is the name');
  console.log(props.desc, 'this is the desc');
  return (
    <Landingdiv>
      <img src={props.image} style={{ width: "85%" }} />
      <div style={{ marginTop: "-2rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* <img src={props.image} style={{ width: "25%" }} /> */}
        <div style={{ marginLeft: "10%", width: "45%", fontWeight: "bold", display: "flex", alignItems: "center",marginTop:"20%" }}>{props.title} <img src={Eth} style={{ marginLeft: "5%" }} /></div>
        {/* <Heading2>created by @brightmac</Heading2> */}
        <Lowertext>{props.desc}</Lowertext>
      </div>
      <div></div>

    </Landingdiv>
  );
};

export default LandingCard;

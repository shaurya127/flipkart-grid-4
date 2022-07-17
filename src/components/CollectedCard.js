import React from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingcardimg1 from "../assets/images/landingimg1.png"
import Dots from "../assets/images/leftdotscollectedcard.png";
import Heart from "../assets/images/heartcollectedcard.png";

import Collectedline from '../assets/images/collectedcardline.png'


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
  height: 50vh;
  width: 12vw;

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
  background: url(${Landingcardimg1});
  height:55%;
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

const  Heading2=styled.div`
font-style: normal;
font-weight: normal;
font-size: .7rem;
line-height: 160%;
/* or 22px */
width:100%;
text-align:left;
padding:0 5%;
color: #A9A9A9;
margin-top:2%
`

const Lowertext=styled.div`
font-style: normal;
font-weight: normal;
font-size: .7rem;
line-height: 160%;
width:100%;
text-align:left;
padding:0 5%;
color: #FFFFFF;
margin-top:5%;

`
const LandingCard = () => {
  return (
    <Landingdiv>
      <Imagecont>
      </Imagecont>
      <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>


          <Heading2>creator name</Heading2>
          <Lowertext>Lorem ipsum dolor sit amet, consectetur Leo...</Lowertext>
          <img src={Collectedline} style={{width:"90%",marginTop:"4%"}} alt="mh"/>
          <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"0 5%",marginTop:"5%"}}>
                <img src={Dots} alt="dots"/>
                <div style={{display:"flex",width:"25%",justifyContent:"space-between"}}>
                    <img src={Heart} alt="heart" style={{width:"3vh",height:"3vh"}}/>
                    <div>12</div>

                </div>
          </div>
      </div>
      <div >

      </div>

    </Landingdiv>
  );
};

export default LandingCard;

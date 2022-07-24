import React from "react";
import styled from "styled-components";
import Line from "../assets/images/Line 54.png";
import Logo from "../assets/images/help-logo.png";
import { Link } from "react-router-dom";
import ComingSoon from "../assets/images/comingsoon1.png";
import Right from '../assets/images/Vectoright.png'


const Divtext = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  margin-top: 3rem;
  display: flex;
  align-items: center;
  /* Secondary text */
  color: #a9a9a9;
`;

const Helpcard = styled.div`
  background: #272a30;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 10rem;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Div2 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  display: flex;
  align-items: center;
  /* Primary text */
  color: #f0f0f0;
`;

const Totopdiv = styled.div`
  font-family: Montserrat;
`;

const SearchBox = styled.div`
  background: #333840;
  display: flex;
  border-radius: 7px;
  height: 5rem;
  width: 100%;
  align-items: center;
  padding: 0 0.5rem;
`;

const Inputdiv = styled.input`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  // line-height: 120%;
  text-align: left;
  color: white;
  margin-left: 0.2rem;
  border: none;
  width: 90%;
  height:3rem;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
      transition: 0.4s;
    }
  }
  ::placeholder {
    color: #585d65;
    text-align: left;
  }
`;

const Text1 = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  margin-top: 1rem;
  color: #a9a9a9;
`;
const Text2 = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  margin-top: 1rem;
  color: #a9a9a9;
`;

const Btndiv = styled.div`
  cursor: pointer;
  background: linear-gradient(
    279.52deg,
    rgba(27, 249, 249, 0.05) -39.47%,
    rgba(23, 247, 206, 0.840625) -5.82%,
    rgba(34, 122, 255, 0.958132) 99.45%,
    rgba(76, 146, 251, 0.5) 136.47%
  );
  box-sizing: border-box;
  filter: drop-shadow(2px 4px 50px rgba(96, 219, 212, 0.12));
  border-radius: 7px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 20px;
  color: #f0f0f0;
`;

const Borderbtn = styled.div`
  cursor: pointer;
  border-radius: 7px;
  padding: 0.3rem 1.4rem;
  //   padding-top: 0.45rem;
  font-weight: 600;
  font-size: 20px;
  color: white;
  border: solid 3px transparent;
  background-image: linear-gradient(black, black),
    linear-gradient(
      279.52deg,
      rgba(27, 249, 249, 0.05) -39.47%,
      rgba(23, 247, 206, 0.840625) -5.82%,
      rgba(34, 122, 255, 0.958132) 99.45%,
      rgba(76, 146, 251, 0.5) 136.47%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px black inset;
`;

const MobilePage = () => {
  return (
    <div style={{
      background: "black", paddingTop: "1rem"
    }}>
      <div
        style={{
          background: "black",
          height: "70vh",
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          marginTop: "1rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            background: "black",
            height: "20%",
            width: "100%",
            display: "flex",
            alignItems: "start",
            padding: "2rem",
            paddingTop: "15rem",
            justifyContent: "center",
            marginTop: "1rem",
            flexDirection: "column",
          }}
        >
         <h1 style={{color:"white"}}>Import Win</h1>
          <img src={ComingSoon} alt="hi" />
          <Divtext>Mobile version to be launched soon.</Divtext>
          <img
            src={Line}
            alt="li"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <Div2>To be among the first users</Div2>
          <Div2 style={{ fontSize: ".7rem", marginTop: "1rem" }}>Email*</Div2>

          <SearchBox style={{ height: "5rem", marginTop: ".5rem" }}>
            <Inputdiv type="text" placeholder="Your Email Address here" />
          </SearchBox>


 



          <div
            style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <Btndiv style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "10rem" }}><span>Notify Me</span><img src={Right} alt="hi" /></Btndiv>
          </div>


        </div>
       

      </div >

      


    </div>
  );
};

export default MobilePage;
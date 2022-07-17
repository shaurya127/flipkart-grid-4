import React from "react";
import "../assets/css/home.css";
import Nftslist from "./NFTsList";
import logo from "../assets/images/image 8.svg";
import cir from "../assets/images/cir.jpg";
import Footer from "./Footer";
import styled from "styled-components";
const ShadowBtn = styled.div`
  background-color: rgb(112, 215, 49);
  color: rgb(26, 24, 24);
  font-size: 20px;
  font-weight: 700;
  width: 200%;
  border: 10px solid rgb(48, 52, 57);
  border-radius: 20px;
  padding: 6px 10px 6px 10px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 900px;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    transition: 0.5s;
    border-radius: 20px;
  }
`;
export const GradientButton = styled.div`
  color: white;
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  background: linear-gradient(
    126.21deg,
    #431e54 0%,
    #9930ef 14.24%,
    #a53db6 49.56%,
    #cb3f59 93.2%
  );
  padding: 0.5rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin: 1rem;
  cursor: pointer;
`;
const Home = (props) => {
  return (
    <div className="mains" style={{marginTop:"10rem"}}>
      <div className="hero-container my-2">
        <div className="hero my-4">
          <div
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></div>

          {/* <h1 style={{ color: "#cccccc" }}>mercado.studio</h1> */}
        </div>

      </div>
      <div>
        <br />
        <br />

        <Nftslist></Nftslist>
      </div>

      <div style={{ height: "250px" }}></div>

      {/* <Footer /> */}
      
    </div>
  );
};

export default Home;

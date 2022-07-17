import React from "react";
import logo from "../assets/images/image 6.svg";
import "font-awesome/css/font-awesome.min.css";
import linesmall from "../assets/images/line (4).png";
import linesmall2 from "../assets/images/line (3).png";
import {
  Containertop,
  Row,
  FooterLink,
  Heading,
  ContainerInner,
} from "./FooterStyles";

const MobileFooter = (props) => {
  const handleLangSelect = (e) => {
    props.setLang(e.target.value);
  };
  return (
    <Containertop>
      <img
        src={linesmall}
        style={{
          width: "80%",
          height: "2px",
        }}
      />
      <br></br>
      <ContainerInner>
        <Row>
         
          <div
            style={{
              color: "wheat",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "10.4rem",
            }}
          >
            <a
              href="https://www.linkedin.com/company/muzixtech/"
              style={{ color: "white", margin: "5px" }}
            >
              <div>
                <i class="fa fa-linkedin" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a style={{ color: "white", margin: "5px" }}>
              <div>
                <i class="fa fa-facebook" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a style={{ color: "white", margin: "5px" }}>
              <div>
                <i class="fa fa-telegram" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a
              href="https://instagram.com/muzix.nft?utm_medium=copy_link"
              style={{ color: "white", margin: "5px" }}
            >
              <div>
                <i class="fa fa-instagram" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a
              href="https://twitter.com/MuzixNFT"
              style={{ color: "white", margin: "5px" }}
            >
              <div>
                <i class="fa fa-twitter" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
          </div>
        </Row>
        
      </ContainerInner>
    </Containertop>
  );
};

export default MobileFooter;
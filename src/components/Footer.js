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

const Footer = (props) => {
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
          <img
            src={logo}
            width="290px"
            height="80px"
            style={{ opacity: "0.99" }}
          ></img>
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
                <i className="fa fa-linkedin" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a style={{ color: "white", margin: "5px" }}>
              <div>
                <i className="fa fa-facebook" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a style={{ color: "white", margin: "5px" }}>
              <div>
                <i className="fa fa-telegram" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a
              href="https://instagram.com/muzix.nft?utm_medium=copy_link"
              style={{ color: "white", margin: "5px" }}
            >
              <div>
                <i className="fa fa-instagram" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
            <a
              href="https://twitter.com/MuzixNFT"
              style={{ color: "white", margin: "5px" }}
            >
              <div>
                <i className="fa fa-twitter" style={{ fontSize: "28px" }}></i>
              </div>
            </a>
          </div>
        </Row>
        <Row style={{display:"flex",flexDirection:"column-reverse"}}>
          <FooterLink>
            <FooterLink
              href="/community-guidelines"
              style={{ marginTop: "1.3rem" }}
            >
              COMMUNITY GUIDELINES
            </FooterLink>
          </FooterLink>
        </Row>
        <Row>
          <Heading style={{color:"#FFFFFF"}}>Quick Links</Heading>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/">Community</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>

          <FooterLink
            href="/privacy-policy"
            style={{ marginTop: "1.2rem", marginLeft: "" }}
          >
            PRIVACY & POLICY
          </FooterLink>
        </Row>

        <Row>
          <Heading>Contact Us</Heading>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p>Phone : +91 8178382149</p>
            {/* <br></br> */}
            <a style={{ color: "white" }} href="mailto:Info@createprotocol.org">
              <p>Email : Info@createprotocol.org</p>
            </a>

            <FooterLink
              href="/cookies-policy"
              style={{ marginTop: "7.2rem", marginLeft: "" }}
            >
              COOKIES POLICY
            </FooterLink>
          </div>
        </Row>
      </ContainerInner>

      <img
        src={linesmall2}
        style={{
          width: "80%",
          height: "1.3px",
        }}
      />
      {/* <div>
        <label for="lang">Language:</label>
        <select name="lang" id="lang" onChange={handleLangSelect} value={props.lang}>
          <option value="en" selected="selected">English</option>
          <option value="es">Spanish</option>
          <option value="ja">Japanese</option>
          <option value="ru">Russian</option>
        </select>
      </div> */}
    </Containertop>
  );
};

export default Footer;

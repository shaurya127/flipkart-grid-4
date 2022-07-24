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
        <h1 style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: "1rem",
                  
                }}>Import win</h1>
        
        </Row>
        <Row style={{display:"flex",flexDirection:"column-reverse"}}>
         
        </Row>
        <Row>
          <Heading style={{color:"#FFFFFF"}}>Quick Links</Heading>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/add-product">Add product</FooterLink>
          <FooterLink href="/">All products</FooterLink>
          
         
        </Row>

        <Row>
          <Heading>Contact Us</Heading>
          


          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
           <p>Phone : 9140257102</p>
           
            <a style={{ color: "white" }} href="mailto:shaurya1272000@gmail.com">
              <p>Email : shaurya1272000@gmail.com</p>
            </a>
         
            
           
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
     
    </Containertop>
  );
};

export default Footer;

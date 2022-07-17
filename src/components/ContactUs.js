import React from "react";
import styled from "styled-components";

import contactus from "../assets/images/contactus.png";
import contactusline from "../assets/images/contactusline.png";
import phone from "../assets/images/carbon_phone.png";
import email from "../assets/images/carbon_email.png";
import location from "../assets/images/ep_location.png";
import adddress from "../assets/images/Mask Group.png";

const ImageContainer = styled.div`
  background: url(${contactus});
  height: 17rem;
  width: 100%;
  margintop: 0;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 140%;
  color: #f4f4f4;
  text-align: left;
  padding-left: 12rem;
  padding-top: 9rem;
`;

const TopText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 150%;
`;

const InnerText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 150%;
  color: #ffffff;
`;

const Radio = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 26px;
`;

const FormLabel=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 26px;
margin-top:2rem;
`

const InputForm=styled.input`
background:none;
margin-top:1rem;
width:20rem;
height:2rem;
color:white;
border:none;

border-bottom:1px solid #565656
`

const Whitebtn=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 20px;
width: 204px;
height: 62px;
background: #B4B4B4;
border-radius: 15px;
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 160%;
color: #606060;`



const ContactUs = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <ImageContainer>Connect with us</ImageContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
              marginTop: "1rem",
              width: "80%",
              height: "100%",
              marginBottom: "10rem",
              color: "white",
              textAlign: "left",
            }}
          >
            <div style={{ width: "25%" }}>
              <TopText>Contact Information</TopText>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ width: "2.4rem" }}
                    src={phone}
                    alt="phonrcall"
                  />
                  <InnerText style={{ marginLeft: "1rem" }}>
                    +91 9877678890
                  </InnerText>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "2.5rem",
                  }}
                >
                  <img
                    style={{ width: "2.4rem" }}
                    src={email}
                    alt="phonrcall"
                  />
                  <InnerText style={{ marginLeft: "1rem" }}>
                    createprotocol@gmail.com
                  </InnerText>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    marginTop: "2.5rem",
                  }}
                >
                  <img
                    style={{ width: "2.4rem" }}
                    src={location}
                    alt="phonrcall"
                  />
                  <InnerText style={{ marginLeft: "1rem" }}>
                    Muzix Technology Private Limited, Plot No-RZ-B-13, Gali No-1
                    New Janki Puri, Uttam Nagar, New Delhi DL 11005
                  </InnerText>
                </div>
                <img src={adddress} style={{ marginTop: "2.5rem",height:"9rem" }} alt="addr" />
              </div>
            </div>
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={contactusline} alt="verticall" style={{height:"32rem"}}/>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TopText>Get in Touch</TopText>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "1rem",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{ background: "none" }}
                  type="radio"
                  value="Career"
                  name="options"
                  
                />
                <Radio for="html">Career</Radio>
                <br />
                <input
                  style={{ marginLeft: "1.5rem" }}
                  type="radio"
                  value="Investment"
                  name="options"
                  
                />
                <Radio for="html">Investment</Radio>
                <br />
                <input
                  style={{ marginLeft: "1.5rem" }}
                  type="radio"
                  name="options"
                  value="Business enquiries/ partnerships"
                  
                />
                <Radio for="html">Business enquiries/ partnerships</Radio>
                <br />
              </div>
              <div style={{ display: "flex", flexDirection: "column",color:"white",width:"100%" }}>
                
                <FormLabel for="fname">Name*</FormLabel>
                <InputForm
                  type="text"
                  name="firstname"
                  // placeholder="Your name.."
                />

                <FormLabel for="lname">Email*</FormLabel>
                <InputForm
                  type="text"
                  name="lastname"
                  // placeholder="Your last name.."
                />
                <FormLabel for="lname">Message*</FormLabel>
                <InputForm
                  type="text"
                  
                  name="lastname"
                  // placeholder="Your last name.."
                />

                <Whitebtn style={{marginTop:"2rem"}}type="submit" value="Submit">Get in Touch</Whitebtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
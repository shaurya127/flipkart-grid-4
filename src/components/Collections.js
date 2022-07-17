import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import contactus from "../assets/images/contactus.png";
import contactusline from "../assets/images/contactusline.png";
import phone from "../assets/images/carbon_phone.png";
import email from "../assets/images/carbon_email.png";
import location from "../assets/images/ep_location.png";
import adddress from "../assets/images/Mask Group.png";
import TopCollectionCard from "./TopCollectionCard";
import Updown from "../assets/images/uodown.png";
import "../assets/css/filterdropdown.css";

const ImageContainer = styled.div`
  background: url(${contactus});
  height: 17rem;
  width: 100%;
  margintop: 0;
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
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 150%;
  text-align: left;
  color: #ffffff;
`;

const Radio = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 26px;
`;

const FormLabel = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 26px;
  margin-top: 2rem;
`;

const InputForm = styled.input`
  background: none;
  margin-top: 1rem;
  color: white;
  border: none;
  border-bottom: 1px solid #565656;
`;

const Whitebtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  width: 204px;
  height: 62px;
  background: #b4b4b4;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  color: #606060;
`;

const ContactUs = () => {
  return (
    <>
      <div style={{ width: "100%" ,paddingTop: "10rem"}}>
        <ImageContainer>Collections</ImageContainer>
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
              justifyContent: "space-between",
              marginTop: "1rem",
              width: "80%",
              height: "100%",
              marginBottom: "10rem",
              color: "white",
              flexDirection: "column",
              //   textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TopText>Top NFT Collections</TopText>
              <div>
                <Link to="/about">
                  <div className="dropdownfilter">
                    <button className="dropbtnfilter">
                      All Chains <div className="downbtn"></div>
                    </button>
                    <div className="dropdown-contentfilter">
                      <Link
                        to="/main"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        All NFTs
                      </Link>

                      <Link to="/collections">Collections</Link>
                      {/* <a href="#">Link 3</a> */}
                    </div>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="dropdownfilter">
                    <button className="dropbtnfilter">
                      All categories <div className="downbtn"></div>
                    </button>
                    <div className="dropdown-contentfilter">
                      <Link
                        to="/main"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        All NFTs
                      </Link>

                      <Link to="/collections">Collections</Link>
                      {/* <a href="#">Link 3</a> */}
                    </div>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="dropdownfilter">
                    <button className="dropbtnfilter">
                      Last 7 days <div className="downbtn"></div>
                    </button>
                    <div className="dropdown-contentfilter">
                      <Link
                        to="/main"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        All NFTs
                      </Link>

                      <Link to="/collections">Collections</Link>
                      {/* <a href="#">Link 3</a> */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <InnerText style={{ width: "25%" }}>Collections</InnerText>

              <div
                style={{
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <InnerText>
                  Volume
                  <img src={Updown} alt="down" />
                </InnerText>
                <InnerText>
                  24h%
                  <img src={Updown} alt="down" />
                </InnerText>
                <InnerText>7d%</InnerText>
                <InnerText>
                  Floor Price
                  <img src={Updown} alt="down" />
                </InnerText>
              </div>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InnerText>
                  Owners
                  <img src={Updown} alt="down" />
                </InnerText>
                <InnerText>
                  Items
                  <img src={Updown} alt="down" />
                </InnerText>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                overflow: "auto",
                height: "50rem",
                marginTop: "2rem",
              }}
            >
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
              <TopCollectionCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

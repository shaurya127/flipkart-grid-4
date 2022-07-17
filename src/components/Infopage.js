import React from "react";
import styled from "styled-components";
import infopage from "../assets/images/infopage.png";
import linewho from "../assets/images/sep line who.png";
import linesmall from "../assets/images/linesmall.png";
import Home from "../assets/images/image 8.svg";
import patent from "../assets/images/patent.png";
import i1 from "../assets/images/1.png";
import i2 from "../assets/images/2.png";
import i3 from "../assets/images/3.png";
import i4 from "../assets/images/4.png";
import i5 from "../assets/images/5.png";
import i6 from "../assets/images/6.png";
import sepline from "../assets/images/sep line.png";
import bell from "../assets/images/bell_front.png";
import envelope from "../assets/images/envelope_front.png";
import Aboutbg from "../assets/images/about.png";
import { Link } from "react-router-dom";

const Maindiv = styled.div`
  color: white;
  text-align: left;

  color: white;

`;

const Gradienttext = styled.div`
  background: -webkit-linear-gradient(#66ffe6, #8093ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.8rem;
  line-height: 57px;
`;
const Bgdiv = styled.div`
  background-image: url(${Aboutbg});
  object-fit: cover;
  background-position: center;
  background-size: cover;
  backgroundrepeat: no-repeat;
`;
const Infopage = () => {
  return (
    <Maindiv>
      {/* section1 */}
      <Bgdiv >
        <div style={{ textAlign: "left",paddingTop:"6rem", paddingLeft:"8rem",
              paddingRight:"8rem", }}>
          <div
            style={{
              // fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "5.2rem",
              lineHeight: "6.5rem",
              textTransform: "capitalize",
              paddingTop:"7rem",


            }}
          >
            Hello,
          </div>
          <br />

          <div
            style={{
              // fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2.9rem",
              lineHeight: "6.5rem",
            }}
          >
            Beautiful,Creative minds
          </div>
        </div>

        {/* section 2 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",

          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "6rem",
              width: "90%",
            }}
          >
            <img style={{ marginTop: "1rem" ,width:"100%"}} src={linewho} alt="line" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
                marginTop: "6rem",
              }}
            >
              <div style={{ display: "flex", width: "90%" }}>
                <div style={{ width: "76%" }}>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontStyle: "normal",
                      marginTop: "2rem",
                    }}
                  >
                    The Future Of Creation Is Distributed
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontStyle: "normal",
                      marginTop: "1.5rem",
                      marginLeft: "1.5rem",
                    }}
                  >
                    <ul>
                      <li>Democratization of creation has begun. </li>
                      <li>The power is in the hands of Creators.</li>
                      <li>The decentralised Creator economy is here.</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      fontSize: "1.3rem",
                      fontStyle: "bold",
                    }}
                  >
                    And NFT on the trustless technology of blockchain is making
                    it possible.
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <img style={{ width: "9rem" }} src={bell} alt="bells" />
                  <img src={envelope} alt="envelopes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bgdiv>
      {/* section3 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10rem",
        }}
      >
        <span style={{ fontSize: "3rem", lineHeight: "4.8rem" }}>
          Who we are
        </span>
        <img
          style={{ marginTop: "1rem", width: "80%" }}
          src={linewho}
          alt="line"
        />
        <img style={{ marginTop: "3.5rem" }} src={Home} alt="logo" />
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            lineHeight: "1.4rem",
            marginTop: "5rem",
          }}
        >
          A NFT Market place for creators and collectors{" "}
        </span>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            lineHeight: "1.4rem",
            marginTop: "1rem",
            marginBottom: "10rem",
            textAlign: "center",
          }}
        >
          We are a team of creators who are building solutions for creators who
          are facing similar problems as we are.
        </span>
      </div>

      {/* section4 */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "10rem",
            width: "90%",
            marginBottom: "8rem",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              lineHeight: "4.7rem",
              color: "#F4F4F4  ",
            }}
          >
            What is a Non-Fungible Token (NFT)?
          </span>
          <img
            style={{ marginTop: "1rem", width: "90%" }}
            src={linewho}
            alt="line"
          />
          <div
            style={{
              display: "flex",
              marginTop: "3rem",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div style={{ width: "60%" }}>
              <br />
              <div style={{ marginTop: "2rem", fontSize: "1.3rem" }}>
                An NFT is Permanent Digital Certificate of Ownership{" "}
              </div>
              <br />
              <span style={{ opacity: "40%" }}>
                With an NFT your creation can be managed digitally and you can
                manage your royalties & sales from anywhere, anytime.
              </span>
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <img
                src={patent}
                style={{ width: "282px", height: "202px" }}
                alt="im"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10rem",
          marginBottom: "5rem",
          padding:"0 8rem"
        }}
      >
        <span style={{ fontSize: "2.4rem", lineHeight: "4.8rem" }}>
          We can convert your creations into NFTs
        </span>
        <img
          style={{ marginTop: "1rem", width: "80%" }}
          src={linewho}
          alt="line"
        />
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-evenly",
            marginBottom: "10rem",
            marginTop: "4rem",
            flexWrap:"wrap",
            width:"100%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "left",
              width:"8rem"
            }}
          >
            <img src={i6} style={{ height:"10rem" }} alt="im1" />
            <div>
              <div>TEXT</div>
              <img src={sepline} style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Songs</li>
                <li>Poems</li>
                <li>Quotes,Etc</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width:"8rem"
            }}
          >
            <img src={i5} style={{ height: "10rem" }} alt="im1" />
            <div>
              <div>AUDIO</div>
              <img src={sepline} style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Songs</li>
                <li>Tunes</li>
                <li>Speeches,Etc</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width:"8rem"
            }}
          >
            <img src={i4} style={{ height: "10rem" }} alt="im1" />
            <div>
              <div>VIDEO</div>
              <img src={sepline} style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Movies</li>
                <li>Short Films</li>
                <li>Clips,Etc</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"8rem"
            }}
          >
            <img src={i1} style={{ height:"10rem" }} alt="im1" />
            <div>
              <div>PHOTO</div>
              <img src={sepline}  style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Photography</li>
                <li>Collages,Etc</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width:"8rem"
            }}
          >
            <img src={i2} style={{ height:"10rem" }} alt="im1" />
            <div>
              <div>2D ART</div>
              <img src={sepline} style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Digital Art</li>
                <li>Paintings</li>
                <li>Illustartions,Etc</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width:"8rem"
            }}
          >
            <img src={i3} style={{ height:"10rem" }} alt="im1" />
            <div>
              <div>3D ART</div>
              <img src={sepline} style={{width:"8rem"}} alt="seperation" />
              <ul style={{marginLeft:"1.1rem"}}>
                <li>Physical Sculpture</li>
                <li>Digital Models</li>
                <li>Interactive Art,Etc</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "1rem",
            width: "80%",
            marginBottom: "5rem",
          }}
        >
          <div style={{ width: "70%" }}>
            <Gradienttext>
              Let’s start with the 20 best works of yours.
            </Gradienttext>
            <div style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
              Once we shake hands -<div style={{ marginTop: ".5rem" }}></div>
              Step 1: We create an NFT of each of your artworks.
              <br />
              <div style={{ marginTop: ".5rem" }}></div>
              Step 2: We market the NFT across the world to digital art lovers.
            </div>
          </div>
          <div
            style={{ width: "10%", display: "flex", justifyContent: "center" }}
          >
            <img src={linesmall} alt="verticall" />
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/assets/create">
              <button
                style={{
                  background: "#EEFAFF",
                  boxShadow: "1px 5px 40px rgba(255, 255, 255, 0.15)",
                  borderRadius: "1rem",
                  border: "none",
                  width: "12rem",
                  padding: "1rem",
                  height: "max-content",
                  margin: "1rem",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Click & register to make your creation an NFT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Maindiv>
  );
};

export default Infopage;

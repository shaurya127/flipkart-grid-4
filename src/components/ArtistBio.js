import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import LandingCard from "./Newcard";

import ArtistPageLine from "../assets/images/Artistpageline.png";
import styled from "styled-components";

const Filternfts = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 140%;
  margin-right: 1.2rem;
  color: #ffffff;
  cursor: pointer;
  padding-bottom: 0.2rem;
`;

const ArtisPage = () => {
  const [art, setArt] = useState(false);
  const [all, setall] = useState(true);
  const [music, setMusic] = useState(false);

  return (
    <div style={{ height: "250vh", width: "100%" ,paddingTop:"10rem"}}>
      <PageHeader subtitle="Home  >  Blogs  >  An open call to artists" />
      <div className="blogDetail__container" style={{ display:"flex",alignItems:"start",justifyContent:"space-between" }}>
        <section className="profile" style={{ width: "25%" }}>
          <div className="profile__wrapper">
            <div className="profile__images">
              <div id="profile_banner">
                <img src="/profile_banner.png" alt="profile banner" />
              </div>
              <div id="profile_pic">
                <img src="/profile.png" alt="profile image" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name">
                <h4>Bright Mba</h4>
                <img
                  style={{ marginLeft: "0.25rem" }}
                  src="/verified.svg"
                  alt="verified"
                />
              </div>
              <h5 className="profile__username">@brightmac</h5>
              <p className="profile__bio">
                I am an artist of the real world with creative ideas of the
                ancients arts in benin, Nigeria
              </p>
            </div>
          </div>
          <div className="profile__share" style={{textAlign:"left"}}>
            <br></br>
            <div style={{ display: "inline" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                CREATED (20)
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                COLLECTED (15)
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                FAVOURITES (35)
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                OFFERS (0)
              </p>
            </div>
          </div>
        </section>
        <section className="blogDetail" style={{width:"70%",display:"flex",alignItems:"start",flexDirection:"column"}}>
          <div style={{ display: "flex",alignItems:"start" }}>
            <Filternfts
              onClick={() => {
                setArt(false);
                setMusic(false);
                setall(true);
              }}
            >
              {all === true ? (
                <div style={{ textDecoration: "underline", cursor: "pointer" }}>
                  All
                </div>
              ) : (
                `All`
              )}
            </Filternfts>
            <Filternfts
              onClick={() => {
                setall(false);
                setMusic(false);
                setArt(true);
              }}
            >
              {art === true ? (
                <div style={{ textDecoration: "underline" }}>Art</div>
              ) : (
                `Art`
              )}
            </Filternfts>
            <Filternfts
              onClick={() => {
                setArt(false);
                setall(false);
                setMusic(true);
              }}
            >
              {music === true ? (
                <div style={{ textDecoration: "underline" }}>Music</div>
              ) : (
                `Music`
              )}
            </Filternfts>
          </div>

          <img src={ArtistPageLine} style={{ width:"100%" }} />
          {all&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",

            }}
          >

            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
          </div>}
          {art&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              width: "55rem",
            }}
          >

            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />

          </div>}
          {music&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              width: "55rem",
            }}
          >

            <LandingCard />

          </div>}
        </section>
      </div>
    </div>
  );
};

export default ArtisPage;

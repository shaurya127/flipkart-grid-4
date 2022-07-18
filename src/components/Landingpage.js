import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Seller from "./Seller";
import axios from "axios";
import Fundingimg from "../assets/images/FUNDING.png";
import Landingcard from "./Newcard";
import Trending1 from "../assets/images/trending1.png";
import { Link } from "react-router-dom";
import Createsell from "../assets/images/createsell.png";
import Card1 from "../assets/images/card.png";
import Card2 from "../assets/images/card1.png";
import Card3 from "../assets/images/card2.png";
import Trendingcardsmall from "./Trendingcardsmall";
import TopCollectionCard from "./TopCollectionCard";
import Loader from "react-loader-spinner";
import { Spin, Space } from 'antd';

const ImageContainer = styled.div`
  background: url(${Fundingimg});
  object-fit: contain;
  background-position: top;
  background-size: cover;
  backgroundrepeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  margintop: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  color: #f4f4f4;
  text-align: left;
  padding-left: 8rem;
  padding-top: 11rem;
`;


const Transparentbtn = styled.div`
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  filter: drop-shadow(2px 4px 50px rgba(96, 219, 212, 0.12));
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 2.9rem;
  cursor: pointer;
`;


const HeadingText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 140%;
`;

const Createsmallh = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 160%;
  text-align: left;
  color: #d14f8c;
`;

const Createmaint = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  line-height: 140%;
  color: #f4f4f4;
  margin-top: 1.2rem;
`;

const Trendingimagetext = styled.div`
height:100%;
width:100%;
display:flex;
padding:2rem;
padding-top:1.5rem;
`

const Cardtext = styled.div`
background: rgba(0, 0, 0, 0.6);
border-radius: 5px;
font-style: normal;
font-weight: bold;
font-size: .7rem;
line-height: 1.5rem;
color: #FFFFFF;
width:max-content;
padding:1rem;
height:2rem;
display:flex;
align-items:center;
`
const Landingpage = (props) => {

  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  const fetchData = async () => {
    const collectionTop = [
      '0x59468516a8259058bad1ca5f8f4bff190d30e066',
      '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      '0x90b2baca772f677f0eff93a844fa70d19fbbd46a',
      
    ]
    const collectionTopArr = [...collectionTop, ...collectionTop, ...collectionTop] // To collect data of 5 NFTs
    console.log(collectionTopArr)
    const responseAllNFT = await Promise.all(
      collectionTopArr.map(async (ele, index) => {
        const id = parseInt(index / 4) + 2;
        try{
          const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + ele + '/' + id + '?chain=eth',
            { 'headers': { "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip' } });
            console.log(ele);
          return res.data;
        }
        catch(err){
          console.log(err);
        }
      })
    );
    setData(responseAllNFT);
    setLoadingState("loaded");
    console.log("response");
    console.log(responseAllNFT);
    // console.log(responseAllNFT[0].token_address);

    // const response = await axios.get();

  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loadingState !== "loaded") {
    return (
      <div
        style={{ minHeight: "100vh", alignContent: "center", marginBottom:"100px", justifyContent: 'center' }}
      >
        <div style={{minHeight: '100vh', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Spin size="large" />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontStyle: "normal",
        color: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          // backgroundImage: `url(require("../assets/images/FUNDING PAGE.png"))`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ImageContainer>
          <div style={{paddingTop:'8vh', height: '100%', display:'flex',flexDirection: 'column', justifyContent:'center'}}>
            <div style={{ color: " #D14F8C", fontSize: ".9rem", fontWeight: 'bold' }}>
              Warranty System now get easy with Import win
            </div>
            <div style={{ fontSize: "3.7rem", lineHeight: "4.5rem" }}>
              Warranty
              <br /> System using <br />
              NFTs{" "}
            </div>
            {/* <div style={{ fontSize: "1.2rem" }}>
              Explore the NFT marketplace dedicated to creators
            </div> */}
            <div style={{ display: "flex", marginTop: "2rem" }}>

              <a href="/allnft" style={{ textDecoration: "none", color: "white" }}><Transparentbtn >Explore Product</Transparentbtn></a>
              <a href="/add-product" style={{ textDecoration: "none", color: "white" }}><Transparentbtn style={{ marginLeft: "2rem" }}>
                Create Product
              </Transparentbtn></a>

            </div>
          </div>
        </ImageContainer>
      </div>

      {/* Trending Carousel */}


      {/* Top Collections */}
      {/* <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeadingText>Top Collections</HeadingText>
          <Transparentbtn>Explore all collections</Transparentbtn>
        </div>
        <div style={{ width: "100%" }}>
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
        </div>
      </div> */}

      {/* Featured Assets */}

      <div
        style={{
          width: "100%",
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeadingText>Featured Assets</HeadingText>
          <Transparentbtn>Explore more</Transparentbtn>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "",
            flexWrap: "wrap",
            marginTop: "2rem",
            width: "108%",
            marginLeft: "0.2rem"

          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", width: "100%", alignItems: "start", justifyContent: "flex-start", flexWrap: "wrap" }}>
              {data.map(ele =>
                <Link to={`/asset/${ele.token_address}/${ele.token_id}`} style={{textDecoration:"none",color:"white"}}>
                  <Landingcard
                    image={JSON.parse(ele.metadata)}
                    owner={ele.owner}
                    name={ele.name}
                    symbol={ele.symbol + ' #' + ele.token_id} /></Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Top Seller */}

      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <HeadingText>Top Sellers</HeadingText> */}

        </div>
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "2rem",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
        </div> */}
        {/* <img  src={Sepline} style={{width:"60rem",marginTop:"4rem"}}/> */}
      </div>

      {/* Create and sell nfts */}

      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
          marginBottom:"5rem"
        }}
      >
        <img style={{width:"35rem"}} src={Createsell} alt="heading"/>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop:"7rem"
          }}
        >
          <div style={{ width: "47%", display: "flex",flexWrap:"wrap" }}>
            <img src={Card1} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Set up your Wallet</Createsmallh>
              <Createmaint>Connect wallet by clicking the wallet icon in the top right corner. Learn about the wallets we support.</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",flexWrap:"wrap" }}>
            <img src={Card2} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Create Your Collection</Createsmallh>
              <Createmaint>Click Create and Add social links, a description, profile & banner images, and set a secondary sales fee.</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",marginTop:"5rem",flexWrap:"wrap" }}>
            <img src={Card3} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Add Your NFTs</Createsmallh>
              <Createmaint>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",marginTop:"5rem",flexWrap:"wrap" }}>
            <img src={Card1} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>List Them For Sale</Createsmallh>
              <Createmaint>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs</Createmaint>
            </div>
          </div>
        </div>
        <Link to='/assets/create' style={{textDecoration:"none",color:"white"}}><Transparentbtn style={{marginTop:"3rem"}}>Create NFT</Transparentbtn></Link>
      </div>
    </div>
  );
};
export default Landingpage;

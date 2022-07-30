import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";
import Fundingimg from "../assets/images/FUNDING.png";
import Landingcard from "./Newcard";
import { Link } from "react-router-dom";
import Createsell from "../assets/images/createsell.png";
import Card1 from "../assets/images/card.png";
import Card2 from "../assets/images/card1.png";
import Card3 from "../assets/images/card2.png";
import Loader from "react-loader-spinner";
import { Spin, Space } from "antd";
import { fs } from "../firebase";
import { useAuth } from "../context/AuthContext";
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
  height: 100%;
  width: 100%;
  display: flex;
  padding: 2rem;
  padding-top: 1.5rem;
`;

const Cardtext = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: #ffffff;
  width: max-content;
  padding: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
`;
const Landingpage = (props) => {
  


  const [data, setData] = useState([]);
  const [productdata, setProductdata] = useState( []);
  const [loadingState, setLoadingState] = useState("not-loaded");

  // fetch data from firebase Products collection
  const fetchProductData = async () => {
    const citiesRef = fs.collection("Products");
    const snapshot = await citiesRef.get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    snapshot.forEach((doc) => {
      var devdata={};
      devdata.id=doc.id;
      devdata.data=doc.data();
      // console.log(doc.id, "=>", doc.data());

      setProductdata((productdata) => [...productdata, devdata]);
      setLoadingState("loaded");
    });
  };
  useEffect(() => {
    fetchProductData();
  }, []);

    console.log(productdata);

  if (loadingState !== "loaded") {
    return (
      <div
        style={{
          minHeight: "100vh",
          alignContent: "center",
          marginBottom: "100px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          <div
            style={{
              paddingTop: "8vh",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "0rem",
            }}
          >
            <div
              style={{
                color: " #D14F8C",
                fontSize: ".9rem",
                fontWeight: "bold",
              }}
            >
              Warranty System now get easy with Import win
            </div>
            <div style={{ fontSize: "3.7rem", lineHeight: "4.5rem" }}>
              Warranty
              <br /> System using <br />
              NFTs{" "}
            </div>
           
            <div style={{ display: "flex", marginTop: "2rem" }}>
              <a
                href="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Transparentbtn>Explore Product</Transparentbtn>
              </a>
              <a
                href="/add-product"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Transparentbtn style={{ marginLeft: "2rem" }}>
                  Create Product
                </Transparentbtn>
              </a>
            </div>
          </div>
        </ImageContainer>
      </div>

     

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
            marginLeft: "0.2rem",
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
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "start",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {productdata.map(
                (ele) => (
                  // console.log(ele),
                  (
                    <Link
                      to={`/asset/${ele.data.sellerAddress}/${ele.id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      
                      <Landingcard
                        image={ele.data.url}
                        owner={ele.data.sellerAddress.substring(0, 5) +
                          "..." +
                          ele.data.sellerAddress.slice(-4)}
                        name={ele.data.title}
                        price={ele.data.price}
                        Warranty={ele.data.Warranty}
                      />
                    </Link>
                  )
                )
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
     
      </div>

      {/* Create and sell nfts */}

      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "7rem",
          }}
        >
          <div style={{ width: "47%", display: "flex", flexWrap: "wrap" }}>
            <img
              src={Card1}
              style={{ height: "6rem", width: "6rem" }}
              alt="C1"
            />
            <div style={{ marginLeft: "3rem", width: "70%" }}>
              <Createsmallh>Set up your Wallet</Createsmallh>
              <Createmaint>
                Connect wallet by clicking the wallet icon in the top right
                corner. Learn about the wallets we support.
              </Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex", flexWrap: "wrap" }}>
            <img
              src={Card2}
              style={{ height: "6rem", width: "6rem" }}
              alt="C1"
            />
            <div style={{ marginLeft: "3rem", width: "70%" }}>
              <Createsmallh>Buy Product</Createsmallh>
              <Createmaint>
                Choose the product you want to buy from the list of products
               
              </Createmaint>
            </div>
          </div>
          
          <div
            style={{
              width: "47%",
              display: "flex",
              marginTop: "5rem",
              flexWrap: "wrap",
            }}
          >
            <img
              src={Card3}
              style={{ height: "6rem", width: "6rem" }}
              alt="C1"
            />
            <div style={{ marginLeft: "3rem", width: "70%" }}>
              <Createsmallh>Avail Warranty</Createsmallh>
              <Createmaint>
               Go to product you buy and click avail Warranty to check warranty status
              </Createmaint>
            </div>
          </div>

          <div
            style={{
              width: "47%",
              display: "flex",
              marginTop: "5rem",
              flexWrap: "wrap",
            }}
          >
            <img
              src={Card1}
              style={{ height: "6rem", width: "6rem" }}
              alt="C1"
            />
            <div style={{ marginLeft: "3rem", width: "70%" }}>
              <Createsmallh>List Them For Sale</Createsmallh>
              <Createmaint>
                Add product description, price, quantity, warranty, and
                seller address to list them for sale.
              </Createmaint>
            </div>
          </div>

         

        </div>
    </div>
  );
};
export default Landingpage;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { Spin } from 'antd';
import contactus from "../assets/images/contactus.png";
import Landingcard from "./Newcard";
import FillterCard from "./FillterCard";
import { Link } from "react-router-dom";
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
`;

const InnerText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 150%;
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

let config = {
  headers: {
    "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip'
  }
}



const AllNFT = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  const fetchData = async () => {
    const collectionTop = [
      '0x59468516a8259058bad1ca5f8f4bff190d30e066',
      '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      '0x90b2baca772f677f0eff93a844fa70d19fbbd46a',
      '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
    ]
    const collectionTopArr = [...collectionTop, ...collectionTop, ...collectionTop, ...collectionTop, ...collectionTop] // To collect data of 5 NFTs

    const responseAllNFT = await Promise.all(
      collectionTopArr.map(async (ele, index) => {
        const id = parseInt(index / 4) + 2;
        const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + ele + '/' + id + '?chain=eth',
          { 'headers': { "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip' } });
        return res.data;
      })
    );
    setData(responseAllNFT);
    setLoadingState("loaded");
    // console.log("response");
    // console.log(responseAllNFT);

    // const response = await axios.get();

  }

  useEffect(() => {
    fetchData();
  })
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
    <>
      <div style={{ width: "100%", paddingTop: "10rem" }}>
        <ImageContainer>Discover</ImageContainer>
        <div className="flex-container" style={{ justifyContent: "space-between", width: "90%" }}>
          {/* <img src={filterimage} width="118px" height="52px"></img> */}
          <div style={{ display: "flex" }}>
            {filterOpen ? (
              <button
                className="btn filterbutton2"
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              >
                <i className="fa fa-filter "></i>Filter
              </button>
            ) : (
              <button
                className="filterbutton"
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              >
                Filter
              </button>
            )}

            <div className="dropdownfilter">
              <button className="dropbtnfilter">
                Price ascending <div className="downbtn"></div>
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
          </div>
          <div className="dropdownfilter">
            <button className="dropbtnfilter">
              Last 7 days<div className="downbtn"></div>
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
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "4vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
              marginTop: "1rem",
              width: "100%",
              height: "100%",
              marginBottom: "10rem",
              color: "white",
              textAlign: "left",
              marginLeft: "4rem",
              marginRight: "4rem",
            }}
          >
            {filterOpen && (
              <div style={{ width: "25%", marginTop: "2.7rem" }}>
                <FillterCard />
              </div>
            )}

            <div
              style={{
                width: filterOpen === true ? "70%" : "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: filterOpen === true ? "0rem" : "2rem",
              }}
            >
              <div style={{ display: "flex", width: "100%", alignItems: "start", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {data.map(ele =>
                  <Landingcard
                    image={JSON.parse(ele.metadata)}
                    owner={ele.owner}
                    name={ele.name}
                    symbol={ele.symbol + ' #' + ele.token_id} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNFT;

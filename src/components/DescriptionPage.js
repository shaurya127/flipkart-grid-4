import React from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Market from "../ethereum/Marketplace.json";
import NFT from "../ethereum/NFT.json";
import { nftmarketaddress, nftaddress } from "../config";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import Footer from "./Footer.js";
import { useHistory } from "react-router";
import { sendTransaction } from "./sendTransaction";

import Player from "video-react/lib/components/Player";
import "../../node_modules/video-react/dist/video-react.css"; // import css

import reactshare from "./nftshare";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, TelegramIcon } from "react-share";
import Share from "./nftshare";
const Splitscreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-y: hidden;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: auto;
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start;
  margin-right:100px;
  width: 100%;
  height:100vh;
  border:1px solid black
  flex-wrap:wrap
  @media (max-width: 1000px) {
    width:100%;
    height:60%;
    overflow:hidden;
  }
`;

const Signupbtn = styled.div`
  display: block;
  width: 20%;
  background: rgb(7, 7, 135);
  color: white;
  border: none;
  padding: 1rem;
  font-size: medium;
  border-radius: 8px;
  &:hover {
    background: blue;
    transition: 200ms ease-in;
  }
`;

const DescriptionPage = (props) => {
  const [allowance, setAllowance] = useState(false);
  const [obj, setobj] = useState({});
  const [loadingState, setLoadingState] = useState("not-loaded");
  const { itemid } = useParams();
  //itemid = itemid.toNumber();
  var itemId = ethers.BigNumber.from(itemid);

  useEffect(() => {
    load2(itemId);
  }, []);

  async function load2(itemId) {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    itemId = ethers.BigNumber.from(itemId);
    const data = await marketContract.fetchIndividualNFT(itemId);
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const tokenUri = await tokenContract.tokenURI(data.tokenId.toNumber());
    const meta = await axios.get(tokenUri);
    var item = {
      itemId: data.itemId,
      nftContract: data.nftContract,
      tokenId: data.tokenId,
      seller: data.seller,
      price: ethers.utils.formatEther(data.price), // price in wei
      image: meta.data.image || meta.data.imageCID,
      name: meta.data.name,
      desc: meta.data.description,
      file:meta.data.file,
    };

    console.log("item: ", item);
    setobj(item);
    setLoadingState("loaded");
  }
  const isEnoughAllowance = async () => {
    const owner = await window.wallet.getAddress();
    const amt = await window.ercInst.allowance(
      owner,
      window.marketInst.address
    );
    console.log(amt >= ethers.utils.parseEther(obj.price));
    setAllowance(amt >= ethers.utils.parseEther(obj.price));
  };

  const buyNFT = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    window.wallet = signer;
    console.log(ethers.utils.parseEther(obj.price));
    if (!allowance) {
      await sendTransaction(
        window.ercInst,
        "approve",
        [window.marketInst.address, ethers.utils.parseEther(obj.price)],
        "You give allowance to MarketPlace of required WETH"
      );
      await isEnoughAllowance();
    } else {
      await sendTransaction(
        window.marketInst,
        "buyNFT",
        [itemId],
        "You have successfully Purchase This Token"
      );
    }
  };

  if (loadingState !== "loaded") {
    return (
      <div
        style={{ height: "200px", alignContent: "center", marginTop: "160px" }}
      >
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
  console.log(obj);
  return (
    <>
      <Splitscreen style={{ marginRight: "20px" }}>
        {!obj.image ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "centesa",
              justifyContent: "center",
            }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <Left>
              <div
                style={{
                  padding: "2rem",
                  height: "100%",
                  width: "80%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  paddingBottom: "0",
                  marginTop:"120px",
                  overflow: "hidden",
                }}
              >
                {obj.file=="mp4"?<Player src={obj.image}></Player>: <Zoom>
                  <img
                    src={obj.image}
                    alt="nft"
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      height: "500px",
                    }}
                  />
                </Zoom>}

              </div>
              <Share />
            </Left>
            <Right>
              <p
                style={{
                  color: "white",
                  fontSize: "26px",
                  letterSpacing: "2px",
                  marginTop: "120px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {" "}
                {obj.name}
              </p>
              <div
                style={{
                  overflow: "auto",
                  maxHeight: "70vh",
                  marginTop: "38px",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    letterSpacing: "2px",
                    marginTop:"10px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  {obj.desc}
                </p>
              </div>
              <br />
              <h2
                style={{
                  color: "white",
                  textOverflow: "none",
                  fontSize: "1.2rem",
                  letterSpacing: "2px",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                seller :{" " + obj.seller}
              </h2>
              <p
                style={{
                  color: "white",
                  fontSize: "26px",
                  letterSpacing: "2px",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                Price:{" " + obj.price} WETH
              </p>
              <div style={{ width: "100%" }}>
                <Signupbtn
                  style={{ background: "white", color: "black" }}
                  onClick={buyNFT}
                >
                  {allowance ? "BUY" : "Set Allowance"}
                </Signupbtn>
              </div>

              <br />
            </Right>
          </>
        )}
      </Splitscreen>
      {/* <Footer /> */}
    </>
  );
};

export default DescriptionPage;

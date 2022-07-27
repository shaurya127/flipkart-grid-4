import React from "react";
import axios from "axios";
import FormData from "form-data";
import { useState } from "react";
import { ethers } from "ethers";
import fs from "fs";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress, polygonweth } from "../config";
import "../assets/css/home.css";
import styled from "styled-components";
import { Player } from "video-react";
import { storage } from "../firebase.js";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import PageHeader from "../components/PageHeader";
import Createsell from "../assets/images/createsell.png";
import Card1 from "../assets/images/card.png";
import Card2 from "../assets/images/card1.png";
import Card3 from "../assets/images/card2.png";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";

import {
  mintNFT,
} from "../contract/interact.js";

const key = "8afd7e928a20fcb2f70b";
const secret =
  "cab8f89d1cd01308867d13bbea01b2742f03969b3bf1c8e0e3d0d9223d1d1d67";

const Formlabel = styled.label`
  left: 16.51%;
  right: 78.49%;
  top: 53.87%;
  bottom: 45.23%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;
  letter-spacing: 0.3vmin;
  color: #a0abb8;
  border: none;
`;

const Button1 = styled.div`
  width: 221px;
  height: 47px;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  background-color: black;
  color: #f1f1f1;
  border-radius: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  margin-right: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
`;

const Formlabel2 = styled.label`
  left: 16.51%;
  right: 78.49%;
  top: 53.87%;
  bottom: 45.23%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;

  color: #a0abb8;
`;

const Formfill = styled.form`
  margin: 18px;
  margin-left: 50px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-32) /
    var(--unnamed-line-spacing-44) var(--unnamed-font-family-bahnschrift);
  letter-spacing: var(--unnamed-character-spacing-6-4);

  text-align: left;
  font: normal normal normal 24px Bahnschrift;
  letter-spacing: 6.4px;
`;
const Formfilltxtdocs = styled.input`
  margin-left: 25px;
  font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24) /
    var(--unnamed-line-spacing-34) var(--unnamed-font-family-bahnschrift);
  letter-spacing: var(--unnamed-character-spacing-4-8);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal 300 24px/34px Bahnschrift;
  letter-spacing: 4.8px;
  color: #ffffff;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 2px solid red;
  margin-bottom: 20px;
  margin-top: 20px;
  background: #363636;
  border-radius: 6px;
  width: 80%;
  height: 40px;
  border: none;
  margin-left: 0;
`;

const Formfilltxt2 = styled.textarea`
  margin-bottom: 20px;
  margin-top: 20px;
  background: #363636;
  border-radius: 6px;
  height: 90px;
  border: none;
`;
const ShadowBtn = styled.div`
  background-color: green;
  color: white;
  padding: 0.3rem 1.2rem;
  alignitems: center;
  cursor: pointer;
  border: 8px solid black;
  fontsize: 2.5rem;
  lineheight: 2rem;
  textalign: center;
  &:hover {
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    transition: 0.5s;
  }
`;

const Getstarted = styled.div`
  padding: 10px;
  margin-left: 26px;
  /* Header 2 */

  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 140%;
  margin-top: 20px;
  /* padding-top: -10px; */
  /* display: inline; */
  margin-left: 44px;
  /* identical to box height, or 38px */

  display: flex;
  align-items: flex-end;
  text-align: right;

  color: #0070ff;
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

const Uploadfile = async (file) => {
  const storageRef = ref(storage, `nft/images`);
  const uploadeRef = await uploadBytes(storageRef, file);
  const downLoadUrl = await getDownloadURL(uploadeRef.ref);
  return downLoadUrl;
};

const projectId = "2CFlxQSp0nl3q8LdfwnFiAfAeTp";
const projectSecret = "8a3c8c48c1b49cd062469969f7b80961";
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

function Mintnft() {
  const [fileImg, setFileImg] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [filehai, setFilehai] = useState(null);
  const [filetype, setFileType] = useState(null);
  const [filename, setfilename] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = React.useState([]);
  const [fileItem, setFile] = useState(null);
  const [prog, setProg] = useState(0);
  const [status, setStatus] = useState("");
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    royaltyinweth: "",
  });

  async function onChange(e) {
    setFile(e.target.files[0]);
    const url = await Uploadfile(e.target.files[0]);
    setFileImg(url);
    console.log(url);
    
  }

  // console.log(fileImg);

  // console.log(fileUrl);
  const onMintPressed = async () => {
    const { name, description, price, royaltyinweth } = formInput;
    const { success, status } = await mintNFT(
      fileImg,
      name,
      description,
      price,
      royaltyinweth
    );
    setStatus(status);
    if (success) {
      // navigate to home page
       window.location.href = "/";
      alert("NFT minted");

    }
  };

  return (
    <div style={{ paddingTop: "10rem" }}>
      <PageHeader title="Create" />

      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        <img style={{ width: "35rem" }} src={Createsell} alt="heading" />
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
              <Createsmallh>Create Your Collection</Createsmallh>
              <Createmaint>
                Click Create and Add social links, a description, profile &
                banner images, and set a secondary sales fee.
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
              <Createsmallh>Add Your NFTs</Createsmallh>
              <Createmaint>
                Upload your work (image, video, audio, or 3D art), add a title
                and description, and customize your NFTs
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
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs
              </Createmaint>
            </div>
          </div>
        </div>
        <Link
          to="/assets/create"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Transparentbtn style={{ marginTop: "3rem" }}>
            Create NFT
          </Transparentbtn>
        </Link>
      </div>
      <Getstarted>GET STARTED -</Getstarted>

      {/* <h3 className="req">GET STARTED -</h3> */}

      <view
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formfill
          // className="formfill"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          {uploading && <p style={{ fontSize: "2rem" }}>uploaded {prog}%</p>}
          <Formfilltxtdocs
            type="file"
            className="formtxtfill docs"
            name="Asset"
            onChange={onChange}
          />

          <Formlabel className="formlable">NFT name </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
            style={{ width: "100%" }}
          />
          <Formlabel2 className="formlable2">Description</Formlabel2>
          <Formfilltxt2
            className="formtxtfill2"
            rows="1"
            cols="10"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
            style={{ width: "100%" }}
          ></Formfilltxt2>
          <Formlabel className="formlable">Price in WETH </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
            style={{ width: "100%" }}
            required
          />
          <Formlabel className="formlable">
            Creator royalty (in WETH){" "}
          </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) =>
              updateFormInput({ ...formInput, royaltyinweth: e.target.value })
            }
            style={{ width: "100%" }}
          />
          {/* <br /> */}
        </Formfill>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          {fileImg ? (
            filetype == "mp4" ? (
              <div
                style={{
                  objectFit: "contain",
                  width: "576px",
                  height: "400px",
                }}
              >
                <Player src={fileUrl}></Player>
              </div>
            ) : (
              <img
                style={{
                  objectFit: "contain",
                  width: "576px",
                  height: "500px",
                }}
                src={fileImg}
                alt="pre"
              />
            )
          ) : (
            <div
              style={{
                width: "576px",
                height: "500px",
                backgroundColor: "#363636",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  objectFit: "contain",
                }}
              >
                Preview Here
              </h2>
            </div>
          )}
        </div>
      </view>
      <Button1 className="digitalbutton" onClick={onMintPressed}>
        <div style={{ color: "white" }}>Create Digital Asset</div>
      </Button1>
    </div>
  );
}

export default Mintnft;

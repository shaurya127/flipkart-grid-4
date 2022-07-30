import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { useSelector, useDispatch } from "react-redux";
import NFTcard from "./Profilecardbig";
import { Spin } from "antd";
// import "../assets/css/filterdropdown.css";
import Tick from "../assets/images/tickimg.png";
import axios from "axios";
import { Link } from "react-router-dom";
const ImageContainer = styled.div`
  background: #313131;
  height: 15rem;
  width: 100%;
  margintop: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 140%;
  color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerText = styled.div`
  font-style: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.2rem;

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

const Profilediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -17rem;
`;

const Filtercurved = styled.div`
  background: #414141;
  border: 1.5px solid #414141;
  box-sizing: border-box;
  border-radius: 23.5px 23.5px 2px 2px;
  width: 15%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-right: 0.1rem;
  cursor: pointer;
`;

const Filtercurveddiv = styled.div`
  border-bottom: 1px solid
    linear-gradient(
      90deg,
      rgba(128, 147, 255, 0.25) 9.45%,
      #7d9bfa 26.47%,
      #60dbd4 72.88%,
      rgba(92, 228, 207, 0.25) 89.94%
    );
`;

const initialstate = {
  Collected: true,
  Created: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Collected": {
      return {
        Collected: true,
        Created: false,
      };
    }
    case "Created": {
      return {
        Collected: false,
        Created: true,
      };
    }
    default: {
      return {
        Collected: true,
        Created: false,
      };
    }
  }
};
const Userprofile = () => {
  const dispatch = useDispatch();
  const [state, dispatchTemp] = useReducer(reducer, initialstate);
  const [ownerresponse, setOwnerresponse] = useState([]);
  const walletData = useSelector((state) => state.wallet.wallet);
  const owaddress=walletData && walletData.address; 
  // console.log(owaddress);
  const [loading, setLoading] = useState(true);
  const [loadingState, setLoadingState] = useState("not-loaded");

  const [error, setError] = useState(null);

  const [profileNFT, setProfileNFT] = useState([]);

  const getWalletNfts = async () => {
    const apiKey = "PTvX4BqWwpnxtE5hUYvtOgdDVcAQGBp_";
    const baseURL = "https://eth-rinkeby.alchemyapi.io/nft/v2/demo/getNFTs/?owner=0x5f4AbD6766b4e7E727B31509D175662FA8C0862b";
    // replace with the wallet address you want to query for NFTs
    // const ownerAddr = "0x8Aee72af60dC55E753d4825eC6DbD304DaEA230b";
    
    var config = {
      method: 'get',
      url: baseURL,
    };

    axios(config)
      .then((response) => setProfileNFT(response.data.ownedNfts)).then(() => setLoadingState("loaded"))
      .catch((error) => console.log(error.response.data));
  };

  useEffect(() => {
    
    getWalletNfts();
    setLoading(false);
  }, []);
  
  console.log(profileNFT);
  // console.log(typeof profileNFT);

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
    <>
      <div style={{ width: "100%", paddingTop: "10rem" }}>
      

        <ImageContainer>
          <Profilediv>
            <img
              src={"//joeschmoe.io/api/v1/jon"}
              alt="hi"
              style={{ height: "28vh" }}
            />
            <TopText>
              Bright MBA
              <img src={Tick} style={{ marginLeft: ".5vw" }} />
            </TopText>
            <InnerText>{walletData && walletData.address}</InnerText>
            <InnerText>Joined January 2022</InnerText>
          </Profilediv>
        </ImageContainer>
        



        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginTop: "10rem",
          }}
        >
          {profileNFT.map((ele) => (
            console.log(ele),
            <NFTcard
              image={ele.metadata.image}
              name={ele.title}
              Warranty={ele.metadata.Warranty}
              price={ele.metadata.price}
              time={ele.metadata.time}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default Userprofile;

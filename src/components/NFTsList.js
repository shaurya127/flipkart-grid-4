import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import "../assets/css/nft.css";
import Market from "../ethereum/Marketplace.json";
import NFT from "../ethereum/NFT.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { nftmarketaddress, nftaddress } from "../config";
import Loader from "react-loader-spinner";
import { sendTransaction } from "./sendTransaction";
import { Player } from "video-react";
// import VideoPlayer from "react-video-js-player";
import "../../node_modules/video-react/dist/video-react.css"; // import css

const ShadowBtn = styled.div`
  background-color: rgb(112, 215, 49);
  color: rgb(26, 24, 24);
  font-size: 20px;
  font-weight: 700;
  width: 40%;
  border: 10px solid rgb(48, 52, 57);
  border-radius: 20px;
  padding: 6px 10px 6px 10px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 900px;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    transition: 0.5s;
    border-radius: 20px;
  }
`;

const Span1 = styled.div`
  text-decoration: none;
`;

const ImgHover = styled.div`
  border-radius: 1rem;
  &:hover {
    border-radius: 1rem;
    box-shadow: 0 5px 15px grey;
    transition: 0.5s;
  }
`;
const Nftslist = (props) => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);

    const data = await marketContract.fetchAllNFTs();
    // console.log(data);
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price, "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          itemId: i.itemId,
          image: meta.data.image || meta.data.imageCID,
          desc: meta.data.description,
          nftContract: i.nftContract,
          file: meta.data.file,
        };
        // console.log(item);
        return item;
      })
    );
    console.log("Token listed for sale.");
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);

    setLoadingState("loaded");
  }

  async function buyNft(nft) {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      window.wallet = signer;
      window.provider = provider;
      const contract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        signer
      );
      // console.log(nft);
      const price = ethers.utils.parseUnits(nft.price, "ether");
      // console.log(nftaddress);
      // console.log(nft.itemId);
      await sendTransaction(
        contract,
        "buyNFT",
        [nft.itemId],
        "You have Purchse Token Successfully"
      );
      loadNFTs();
    } catch (e) {
      console.log(e);
    }
  }



  if (loadingState != "loaded") {
    return (
      <div
        style={{ height: "200px", alignContent: "center", marginTop: "60px" }}
      >
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  } else if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="py-10 px-20 text-3xl" style={{ color: "white" }}>
        No assets created
      </h1>
    );

  var nftsreverse = [...nfts].reverse();
  // nfts.reverse();
  // console.log(nfts);
  // console.log(nftsreverse);
  return (
    <div>
      <div className="p-4">
        <div className=" my-4 ml-4 ">
          <div className="m-card-content" style={{ justifyContent: "center" }}>
            {nftsreverse.map((nft, i) => (
              <div
                key={i}
                className="row nft-card-container m-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "10px",
                }}
              >
                <Link to={`/asset/${nft.itemId}`}>

                    {nft.file === "mp4" ? (
                      <div className="videomint" style={{objectFit:"contain",marginRight:"1rem",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <ImgHover>
                        <div
                        className="videomint"

                          style={{
                            width: "300px",
                            height: "270px",
                            // marginRight:"px",
                            padding:"4px"
                          }}
                        >
                          <div style={{alignItems:"center",marginTop:"20px"}}>
                          <Player  src={nft.image}></Player>
                          </div>

                        </div>


                        <p
                          style={{
                            fontWeight: "bold",
                            margin: "10px",
                            color: "white",
                            textAlign: "start",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div id="videomintprice" style={{marginTop:"-10px",padding: "10px"}}>{nft.price} Eth</div>
                          <div>{nft.collection}</div>

                          <div id="videomintadd" style={{marginTop:"-10px"}}>
                            <Span1 style={{ background: "none", padding: "10px" }}>
                              {nft.seller.substring(0, 6) +
                                "........." +
                                nft.seller.slice(-3)}
                            </Span1>
                          </div>
                        </p>
                        </ImgHover>
                      </div>

                    ) : (
                      <ImgHover>
                      <div className="nft-img-container " style={{marginLeft:"10px",border:"none"}}>
                        <img
                          className="nft-img"
                          src={nft.image}
                          alt="text"
                        ></img>

                        <p
                          style={{
                            fontWeight: "bold",
                            margin: "10px",
                            color: "white",
                            textAlign: "start",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div id="videomintprice">{nft.price} Eth</div>
                          <div>{nft.collection}</div>

                          <div id="videomintadd">
                            <Span1 style={{ background: "none", padding: "0" }}>
                              {nft.seller.substring(0, 6) +
                                "........." +
                                nft.seller.slice(-3)}
                            </Span1>
                          </div>
                        </p>
                      </div>
                      </ImgHover>
                    )}

                </Link>
              </div>

              // </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        {Boolean(sold.length) && (
          <div>
            <h2 className="text-2xl py-2">Items sold</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {sold.map((nft, i) => (
                <div
                  key={i}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <img
                    style={{
                      width: "20rem",
                      height: "20rem",
                      objectFit: "contain",
                    }}
                    src={nft.image}
                    className="rounded"
                    alt=""
                  />
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-red">
                      Price - {nft.price} Eth
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nftslist;

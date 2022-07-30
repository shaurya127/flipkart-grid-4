import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import Web3Modal from "web3modal";
import { fetchItemMetaData, getNftById } from "../../store/item/action";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import Landingowner from "../../assets/images/landingowner.png";
import Eth from "../../assets/images/Ethereum (ETH).png";
import { Spin, Avatar } from "antd";
import { fs } from "../../firebase";
import { mintNFT } from "../../contract/interact";
import { sendTransaction } from "../../components/sendTransaction";
import Web3 from "web3";
const Splitscreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100rem;
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
  width: 130%;
  margin-left: auto;
  height: 100rem;
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
  border:1px solid black
  flex-wrap:wrap
  @media (max-width: 1000px) {
    width:100%;
    height:60%;
    overflow:hidden;
  }
`;

const Biddingcard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );
  opacity: 0.75;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  margin-left: 0;
  margin-top: 0.7rem;
`;
const Biddingcard1 = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );
  opacity: 0.75;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  margin-left: 0;
  margin-top: 0.7rem;
  margin-bottom: 0.5rem;
`;
const Mainheading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 140%;
`;

const Borderbtn = styled(Button)`
  cursor: pointer;
  border-radius: 7px;
  padding: 0.5rem 1.4rem;
  margin-left: 0.5rem;
  padding-top: 0.45rem;
  font-weight: 600;
  font-size: 12px;
  color: white;
  border: solid 2px transparent;
  background-image: linear-gradient(black, black),
    linear-gradient(
      279.52deg,
      rgba(27, 249, 249, 0.05) -39.47%,
      rgba(23, 247, 206, 0.840625) -5.82%,
      rgba(34, 122, 255, 0.958132) 99.45%,
      rgba(76, 146, 251, 0.5) 136.47%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px black inset;
`;

const Desctext = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 160%;
  color: #a9a9a9;
`;

const Biddingtext = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  margin-top: 1rem;
`;

const Leftheading = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 3rem;
  color: #a9a9a9;
  line-height: 0.5rem;
`;

const Lefttext = styled.div`
  font-style: normal;
  font-size: 18px;
  line-height: 1;
`;

const createURI = (uri) =>
  uri.slice(0, 7) === "ipfs://"
    ? "https://ipfs.infura.io/ipfs/" + uri.slice(7)
    : uri;

const ItemDescription = () => {
  const dispatch = useDispatch();
  const metaData = useSelector((state) => state.item.itemData);

  const [Properties, setProperties] = useState([]);
  const { collection, id } = useParams();
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [productdata, setProductdata] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [Isminted, setIsminted] = useState(false);

  // fetch data from firebase Products collection

  const fetchProductData = async () => {
    const citiesRef = fs.collection("Products").doc(id);
    const snapshot = await citiesRef.get();
    const data = snapshot.data();
    setProductdata(data);
    setLoadingState("loaded");
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  console.log(productdata);

  useEffect(() => {
    dispatch(
      getNftById({
        ownerAddr: collection,
        tokenId: id,
      })
    );
  }, [dispatch, collection, id]);

  useEffect(() => {
   
  }, []);

  const fileImg = productdata.url;
  const name = productdata.title;
  const price = productdata.price;
  const sellerAddress = productdata.sellerAddress;
  const description = productdata.description;
  const Quantity = productdata.Quantity;
  const Warranty = productdata.Warranty;

  const onMintPressed = async () => {
   
    
    console.log(fileImg, name, price, sellerAddress, description, Quantity);
    const { success, status } = await mintNFT(
      fileImg,
      name,
      description,
      price,
      Quantity,
      Warranty,
      sellerAddress
    );
    
    setStatus(status);
    if (success) {
      // navigate to home page
      alert("NFT minted");
      setIsminted(true);
      
    }
  };

  // check balance in wallet

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
      {productdata && (
        <Splitscreen style={{ paddingTop: "10rem" }}>
          <Left>
            <div
              style={{
                padding: "2rem",
                paddinTop: "0",
                marginTop: "0",
                height: "100%",
                width: "80%",
                borderRadius: "10px",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                paddingBottom: "0",
                overflow: "hidden",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {productdata && (
                <Zoom>
                  <img
                    src={productdata.url}
                    alt="nft"
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      height: "70vh",
                      objectFit: "cover",
                    }}
                  />
                </Zoom>
              )}

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  size={{ xs: 24, sm: 32, md: 30, lg: 40, xl: 55, xxl: 100 }}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <Link to={`/profile/${productdata.sellerAddress}`}>
                  <Lefttext style={{ color: "#A9A9A9" }}>
                    created by <br />
                    {productdata.sellerAddress}
                  </Lefttext>
                </Link>
              </div>
              <div style={{ color: "white" }}>
                <Leftheading>Seller Address</Leftheading>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Lefttext>{productdata.sellerAddress}</Lefttext>
                </div>
              </div>
              <div style={{ color: "white" }}>
                <Leftheading>Token Id</Leftheading>
                <br />
                <Lefttext>{id}</Lefttext>
              </div>
            </div>
          </Left>
          <Right>
            <p
              style={{
                color: "white",
                fontSize: "26px",
                letterSpacing: "2px",
                width: "100%",
                marginTop: "1.3rem",
                textAlign: "left",
              }}
            >
              {/* {metaData && <Mainheading>{metaData.title}</Mainheading>} */}
              <br />
              <Mainheading >Description</Mainheading>
              {productdata && <Desctext>{productdata.description}</Desctext>}

              <br />
              <Mainheading>Warranty</Mainheading>
              {productdata && <Desctext>{productdata.Warranty}</Desctext>}
              
            </p>
            <div
              style={{
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: "0.5rem",
                  color: "white",
                  textAlign: "left",
                  height: "4rem",
                }}
              >
                <Biddingtext>Current Price</Biddingtext>
                <div
                  style={{
                    background: "black",
                    width: "15rem",
                    height: "4rem",
                    borderRadius: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1rem",
                    fontSize: ".7rem",
                    fontWeight: "500",
                    marginTop: "1rem",
                  }}
                >
                  <div style={{ display: "flex" }}>
                   
                    <div style={{ marginLeft: "0.4rem" }}>
                      {productdata.price}
                    </div>
                  </div>


                  {
                    !Isminted ?  <div
                    style={{
                      background: "#229CEA",
                      padding: ".7rem",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                    }}
                  onClick={onMintPressed} >
                    Buy now
                  </div>:
                  <a href="/profile" style={{color:"white"}}>
                    <div
                   style={{
                     background: "#229CEA",
                     padding: ".7rem",
                     borderRadius: "0.5rem",
                     cursor: "pointer",
                   }}
                  >
                  View NFT
                 </div>
                  </a>
                   
                  }
                 
                </div>
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  color: "white",
                  textAlign: "left",
                  height: "4rem",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: "column",
                color: "white",
                marginTop: "5rem",
              }}
            ></div>
          </Right>
        </Splitscreen>
      )}
    </>
  );
};

export default ItemDescription;

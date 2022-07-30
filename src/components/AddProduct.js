import React, { useState } from "react";
import { storage, fs } from "../firebase";
import styled from "styled-components";
import Card1 from "../assets/images/card.png";
import Card2 from "../assets/images/card1.png";
import Card3 from "../assets/images/card2.png";
import PageHeader from "../components/PageHeader";
import Createsell from "../assets/images/createsell.png";
import { Link } from "react-router-dom";

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
  custom-property: 0px;
  cursor: pointer;
  height: 47px;
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  background-color: white;
  color: black;
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
  color: #ffffff;
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

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Warranty, setWarranty] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [image, setImage] = useState(null);

  const [imageError, setImageError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const types = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/PNG",
    "image/avif",
    "image/webp",
  ];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("please select a valid image file type (png or jpg)");
      }
    } else {
      console.log("please select your file");
    }
  };

  const handleAddProducts = (e) => {
    if (
      title === "" ||
      description === "" ||
      price === "" ||
      Quantity === "" ||
      sellerAddress === "" ||
      image === null
    ) {
      alert("Please fill all the fields");
    }
    e.preventDefault();
    console.log(title, description, price, Quantity,Warranty, sellerAddress);
    console.log(image);
    const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => setUploadError(error.message),
      () => {
        storage
          .ref("product-images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            fs.collection("Products")
              .add({
                title,
                description,
                price: Number(price),
                Quantity: Number(Quantity),
                Warranty: Number(Warranty),
                sellerAddress,
                url,
              })
              .then(() => {
                setSuccessMsg("Product added successfully");
                setTitle("");
                setDescription("");
                setPrice("");
                setQuantity("");
                setWarranty("");
                setSellerAddress("");
                document.getElementById("file").value = "";
                setImageError("");
                setUploadError("");
                setTimeout(() => {
                  setSuccessMsg("");
                  alert("Product added successfully");
                }, 3000);
                // show a alert if the product is added successfully
              })
              .catch((error) => setUploadError(error.message));
          });
      }
    );
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
        <Link
          to="/add-product"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Transparentbtn style={{ marginTop: "3rem" }}>
            Create Product
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
          <Formfilltxtdocs
            type="file"
            className="formtxtfill docs"
            name="Asset"
            onChange={handleProductImg}
          />

          <Formlabel className="formlable">product title </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            style={{ width: "100%" }}
          />
          <Formlabel2 className="formlable">Description</Formlabel2>
          <Formfilltxt2
            className="formtxtfill docs"
            rows="1"
            cols="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{ width: "100%" }}
          ></Formfilltxt2>


      <Formlabel className="formlable">Warranty in Days </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) => setWarranty(e.target.value)}
            value={Warranty}
            style={{ width: "100%" }}
            required
          />

          <Formlabel className="formlable">Price </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            style={{ width: "100%" }}
            required
          />

          <Formlabel className="formlable">Quantity </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) => setQuantity(e.target.value)}
            value={Quantity}
            style={{ width: "100%" }}
            required
          />

          <Formlabel className="formlable">Seller Address </Formlabel>
          <Formfilltxtdocs
            className="formtxtfill docs"
            type="text"
            onChange={(e) => setSellerAddress(e.target.value)}
            value={sellerAddress}
            style={{ width: "100%" }}
            required
          />

          {/* <Formfilltxtdocs
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, royaltyinweth: e.target.value })
              }
              style={{ width: "100%" }}
            /> */}
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
          {/* <img
            style={{
              objectFit: "contain",
              width: "576px",
              height: "500px",
            }}
            src={image}
            alt="pre"
          /> */}
          ) ) : (
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
        </div>
      </view>
      <Button1 onClick={handleAddProducts}>Add Product</Button1>
    </div>
  );
};

export default AddProduct;

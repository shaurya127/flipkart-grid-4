import React, { useState, useReducer } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

import contactus from "../assets/images/contactus.png";
import filterimage from "../assets/images/Filter.png";
import Landingcard from "./Profilecardbig";
import FillterCard from "./FillterCard";
import { Link } from "react-router-dom";
import "../assets/css/filterdropdown.css";
import Profileimg from "../assets/images/profileimg.png";
import Tick from "../assets/images/tickimg.png";
import Share from "../assets/images/share.png";
import Settings from "../assets/images/settings.png";
import Filterline from "../assets/images/filterbottomline.png";
import CollectedCard from "./CollectedCard";
import Settingsfiltercard from "./Settingsfiltercard";
import Imageedit from "../assets/images/imageedit.png";
import Checkbox1 from "./Checkbox";
import Eth from '../assets/images/Ethereum (ETH) (1).png'

const ImageContainer = styled.div`
  background: linear-gradient(
    180deg,
    #32b6f0 -16.13%,
    rgba(125, 155, 250, 0.17) 128.01%
  );
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
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
  font-weight: 600;
  font-size: 3rem;
  line-height: 120%;
  text-align: left;

  margin-top: 10rem;

  color: #f4f4f4;
`;

const InnerText = styled.div`
  font-style: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.2rem;

  color: #ffffff;
`;

const Profilediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  border-radius: 55%;
  height: 14rem;
  background-image: url(${Profileimg});
  background-position: center;
`;

const Formlabel = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.1rem;
  color: #ffffff;
`;

const Btndiv = styled.div`
  cursor: pointer;
  background: linear-gradient(
    279.52deg,
    rgba(27, 249, 249, 0.05) -39.47%,
    rgba(23, 247, 206, 0.840625) -5.82%,
    rgba(34, 122, 255, 0.958132) 99.45%,
    rgba(76, 146, 251, 0.5) 136.47%
  );
  box-sizing: border-box;
  filter: drop-shadow(2px 4px 50px rgba(96, 219, 212, 0.12));
  border-radius: 7px;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 20px;
  color: #f0f0f0;
`;

const Borderbtn = styled.div`
  cursor: pointer;
  border-radius: 7px;
  padding: 0.5rem 1.4rem;
  padding-top: 0.45rem;
  font-weight: 600;
  font-size: 20px;
  color: white;
  border: solid 3px transparent;
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

const Checkbox = styled.input`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  margin-top: 0.3rem;
  width: 1.5rem;
`;

const CheckboxText1 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  color: #ffffff;
`;
const CheckboxText2 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
const Checkboxtxtdiv = styled.div`
  display: flex;
  alihn-items: start;
  justify-content: center;
  margin-top: 2rem;
`;

const Inputtext = styled.input`
  width: 90%;
  padding: grey;
  border: 0px;
  font-size: 12px;
  &:focus {
    outline: none;
    color:black;

  }
`;

const initialstate = {
  Profile: true,
  Notif: false,
  Offer: false,
  Account: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Profile": {
      return {
        Profile: true,
        Notif: false,
        Offer: false,
        Account: false,
      };
    }
    case "Notif": {
      return {
        Profile: false,
        Notif: true,
        Offer: false,
        Account: false,
      };
    }
    case "Offer": {
      return {
        Profile: false,
        Notif: false,
        Offer: true,
        Account: false,
      };
    }
    case "Account": {
      return {
        Profile: false,
        Notif: false,
        Offer: false,
        Account: true,
      };
    }
    default: {
      return {
        Profile: true,
        Notif: false,
        Offer: false,
        Account: false,
      };
    }
  }
};

const Userprofile = () => {
  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    royaltyinweth: "",
  });
  const [value1, setCheckbox1] = useState(false);
  const [value2, setCheckbox2] = useState(false);
  const [value3, setCheckbox3] = useState(false);
  const [value4, setCheckbox4] = useState(false);
  const [value5, setCheckbox5] = useState(false);
  const [value6, setCheckbox6] = useState(false);
  const [value7, setCheckbox7] = useState(false);
  const [value8, setCheckbox8] = useState(false);
  const [value9, setCheckbox9] = useState(false);

  return (
    <>
      <div style={{ width: "100%", marginTop: "5rem", padding: "0 7.5rem" }}>
        <TopText>Profile settings</TopText>
        <img src={Filterline} alt="1" style={{ width: "80%" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "1vh",
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
            }}
          >
            <div style={{ width: "20%" }}>
              <Settingsfiltercard state={state} dispatch={dispatch} />
            </div>
            {state.Profile && (
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginLeft: "2rem",
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
                  <ImageContainer
                    onMouseEnter={() => {
                      setShow(true);
                    }}
                    onMouseLeave={() => {
                      setShow(false);
                    }}
                  >
                    {show && <img src={Imageedit} alt="1" />}
                  </ImageContainer>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "1.5rem",
                    }}
                  >
                    <view
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "50%",
                        marginTop: "1.5rem",
                      }}
                    >
                      <form
                        className="formfill"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginLeft: "0",
                        }}
                      >
                        <Formlabel className="formlable">Username </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              name: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        <Formlabel className="formlable2">Bio</Formlabel>
                        <textarea
                          className="formtxtfill2"
                          rows="1"
                          cols="10"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        ></textarea>
                        <Formlabel className="formlable2">Links</Formlabel>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Twitter Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginBottom: "0.2rem" }}
                        ></textarea>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Instagram Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginTop: "0rem" }}
                        ></textarea>
                        <Formlabel className="formlable">
                          Email address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              price: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                          required
                        />
                        <Formlabel className="formlable2">
                          Wallet address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              royaltyinweth: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        {/* <br /> */}
                      </form>
                    </view>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "30%",
                        flexDirection: "column",
                        marginTop: "-15%",
                      }}
                    >
                      <Profilediv
                        onMouseEnter={() => {
                          setShowp(true);
                        }}
                        onMouseLeave={() => {
                          setShowp(false);
                        }}
                      >
                        {/* <img
                        src={Profileimg}
                        alt="hi"
                        style={{ height: "28vh" }}
                      /> */}
                        {showp && <img src={Imageedit} alt="1" />}
                      </Profilediv>
                      <InnerText style={{ marginTop: "0.5rem" }}>
                        Profile Picture
                      </InnerText>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <Btndiv>Save</Btndiv>
                    <Borderbtn>Cancel</Borderbtn>
                  </div>
                </div>
              </div>
            )}
            {state.Offer && (
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginLeft: "2rem",
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
                  <ImageContainer
                    onMouseEnter={() => {
                      setShow(true);
                    }}
                    onMouseLeave={() => {
                      setShow(false);
                    }}
                  >
                    {show && <img src={Imageedit} alt="1" />}
                  </ImageContainer>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "1.5rem",
                    }}
                  >
                    <view
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "50%",
                        marginTop: "1.5rem",
                      }}
                    >
                      <form
                        className="formfill"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginLeft: "0",
                        }}
                      >
                        <Formlabel className="formlable">Username </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              name: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        <Formlabel className="formlable2">Bio</Formlabel>
                        <textarea
                          className="formtxtfill2"
                          rows="1"
                          cols="10"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        ></textarea>
                        <Formlabel className="formlable2">Links</Formlabel>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Twitter Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginBottom: "0.2rem" }}
                        ></textarea>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Instagram Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginTop: "0rem" }}
                        ></textarea>
                        <Formlabel className="formlable">
                          Email address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              price: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                          required
                        />
                        <Formlabel className="formlable2">
                          Wallet address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              royaltyinweth: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        {/* <br /> */}
                      </form>
                    </view>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "30%",
                        flexDirection: "column",
                        marginTop: "-15%",
                      }}
                    >
                      <Profilediv
                        onMouseEnter={() => {
                          setShowp(true);
                        }}
                        onMouseLeave={() => {
                          setShowp(false);
                        }}
                      >
                        {/* <img
                        src={Profileimg}
                        alt="hi"
                        style={{ height: "28vh" }}
                      /> */}
                        {showp && <img src={Imageedit} alt="1" />}
                      </Profilediv>
                      <InnerText style={{ marginTop: "0.5rem" }}>
                        Profile Picture
                      </InnerText>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <Btndiv>Save</Btndiv>
                    <Borderbtn>Cancel</Borderbtn>
                  </div>
                </div>
              </div>
            )}
            {state.Notif && (
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginLeft: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <CheckboxText2>
                    Select which notifications you would like to receive for
                    0x74a6...a5f6
                  </CheckboxText2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value1}
                        checked={value1}
                        onChange={({ target }) => setCheckbox1(!value1)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Item Sold</CheckboxText1>
                        <CheckboxText2>
                          When someone purchased one of your items
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value2}
                        checked={value2}
                        onChange={({ target }) => setCheckbox2(!value2)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Bid Activity</CheckboxText1>
                        <CheckboxText2>
                          When someone bids on one of your items
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value3}
                        checked={value3}
                        onChange={({ target }) => setCheckbox3(!value3)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Price Change</CheckboxText1>
                        <CheckboxText2>
                          When an item you made an offer on changes in price
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value4}
                        checked={value4}
                        onChange={({ target }) => setCheckbox4(!value4)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Auction Expiration</CheckboxText1>
                        <CheckboxText2>
                          When a Dutch or English auction you created ends
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value5}
                        checked={value5}
                        onChange={({ target }) => setCheckbox5(!value5)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Outbid</CheckboxText1>
                        <CheckboxText2>
                          When an offer you placed is exceeded by another user
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value6}
                        checked={value6}
                        onChange={({ target }) => setCheckbox6(!value6)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Referral Successful</CheckboxText1>
                        <CheckboxText2>
                          When an item you referred is purchased
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value7}
                        checked={value7}
                        onChange={({ target }) => setCheckbox7(!value7)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Owned Asset Updates</CheckboxText1>
                        <CheckboxText2>
                          When a significant update occurs for one of the items
                          you have purchased on OpenSea
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value8}
                        checked={value8}
                        onChange={({ target }) => setCheckbox8(!value8)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Successful Purchase</CheckboxText1>
                        <CheckboxText2>
                          When you successfully buy an item
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                    <Checkboxtxtdiv>
                      <Checkbox1
                        value={value9}
                        checked={value9}
                        onChange={({ target }) => setCheckbox9(!value9)}
                      />
                      <div style={{ marginLeft: ".8rem" }}>
                        <CheckboxText1>Mercado Newsletter</CheckboxText1>
                        <CheckboxText2>
                          Occasional updates from the Mercado team
                        </CheckboxText2>
                      </div>
                    </Checkboxtxtdiv>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginTop: "5rem",
                      flexDirection: "column",
                    }}
                  >
                    <CheckboxText1
                      style={{ fontWeight: "600", marginBottom: "0.2rem" }}
                    >
                      Minimum bid threshold
                    </CheckboxText1>
                    <CheckboxText2>
                      Receive notifications only when you receive offers with a
                      value greater than or equal to this amount of ETH.
                    </CheckboxText2>
                    <div
                      style={{
                        display: "flex",
                        width: "80%",
                        height: "4rem",
                        marginTop: "2rem",
                      }}
                    >
                      <div
                        style={{
                          background: "#090909",
                          width: "15%",
                          borderRadius: "6px 0px 0px 6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding:"0 5%"
                        }}
                      ><img src={Eth} alt="1" style={{marginRight:"10%"}}/>Eth</div>
                      <div
                        style={{
                          background: "#B4B4B4",
                          width: "50%",
                          borderRadius: "0 6px 6px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Inputtext
                          type="text"
                          style={{ border: "none", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginTop: "2rem",
                    }}
                  >
                    <Btndiv>Save</Btndiv>
                  </div>
                </div>
              </div>
            )}
            {state.Account && (
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginLeft: "2rem",
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
                  <ImageContainer
                    onMouseEnter={() => {
                      setShow(true);
                    }}
                    onMouseLeave={() => {
                      setShow(false);
                    }}
                  >
                    {show && <img src={Imageedit} alt="1" />}
                  </ImageContainer>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "1.5rem",
                    }}
                  >
                    <view
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "50%",
                        marginTop: "1.5rem",
                      }}
                    >
                      <form
                        className="formfill"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginLeft: "0",
                        }}
                      >
                        <Formlabel className="formlable">Username </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              name: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        <Formlabel className="formlable2">Bio</Formlabel>
                        <textarea
                          className="formtxtfill2"
                          rows="1"
                          cols="10"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        ></textarea>
                        <Formlabel className="formlable2">Links</Formlabel>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Twitter Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginBottom: "0.2rem" }}
                        ></textarea>
                        <textarea
                          className="formtxtfill docs"
                          rows="1"
                          cols="1"
                          //   placeholder="Your Instagram Handle"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              description: e.target.value,
                            })
                          }
                          style={{ width: "100%", marginTop: "0rem" }}
                        ></textarea>
                        <Formlabel className="formlable">
                          Email address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              price: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                          required
                        />
                        <Formlabel className="formlable2">
                          Wallet address
                        </Formlabel>
                        <input
                          className="formtxtfill docs"
                          type="text"
                          onChange={(e) =>
                            updateFormInput({
                              ...formInput,
                              royaltyinweth: e.target.value,
                            })
                          }
                          style={{ width: "100%" }}
                        />
                        {/* <br /> */}
                      </form>
                    </view>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "30%",
                        flexDirection: "column",
                        marginTop: "-15%",
                      }}
                    >
                      <Profilediv
                        onMouseEnter={() => {
                          setShowp(true);
                        }}
                        onMouseLeave={() => {
                          setShowp(false);
                        }}
                      >
                        {/* <img
                        src={Profileimg}
                        alt="hi"
                        style={{ height: "28vh" }}
                      /> */}
                        {showp && <img src={Imageedit} alt="1" />}
                      </Profilediv>
                      <InnerText style={{ marginTop: "0.5rem" }}>
                        Profile Picture
                      </InnerText>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <Btndiv>Save</Btndiv>
                    <Btndiv>Cancel</Btndiv>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;

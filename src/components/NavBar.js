import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

import "../assets/css/Navbar.css";
import "../assets/css/dropdownnav.css";
import Drawerroutes from "./DrawerRoutes";
import styled from "styled-components";
import ConnectWallet from "./ConnectWallet";
import { useDispatch, useSelector } from "react-redux";
import { addMetamask, addWalletConnect } from "../store";
import { toggleWalletPopup } from "../store";
import { Menu, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

import "antd/dist/antd.css";
const SubMenu = Menu;
export const GradientButton = styled.div`
  color: white;
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  background: linear-gradient(
    126.21deg,
    #431e54 0%,
    #9930ef 14.24%,
    #a53db6 49.56%,
    #cb3f59 93.2%
  );
  padding: 0.5rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem;
  cursor: pointer;
`;
const Navdivdesktop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  zindex: 1000;
  @media (max-width: 1180px) {
    display: none;
  }
`;

const Navdiv = styled.div`
  @media (min-width: 1180px) {
    display: none;
  }
  width: 100%;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100px;
  background: transparent;
  position: fixed;
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
`;

const NavBar = (props) => {
  const { signUpWithName, currentUser } = useAuth();
  const {logout}=useAuth();

  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet.wallet);

  useEffect(() => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const Logout = () => {
    (async ()=>{logout();})()
    window.location.href = "/login";
  };

  // console.log(Web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1"))
  //  var bal= web3.eth.getBalance(wallet.address)
  // .then(console.log);
  //   console.log("here are we"+bal);
  return (
    <>
      <Navdiv>
        <nav
          role="navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MenuOutlined style={{ color: "white", fontSize: "2rem" }} />

          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <NavLink to="/" activeClassName="active">
                <div style={{ textDecoration: "none" }}>Home</div>
              </NavLink>
              <NavLink to="/add-product">
                <div style={{ textDecoration: "none" }}>Add Product</div>
              </NavLink>

              <NavLink to="/faq">
                <div style={{ textDecoration: "none" }}>FAQs</div>
              </NavLink>
              <NavLink to="/contactus">
                <div style={{ textDecoration: "none" }}></div>
              </NavLink>
            </ul>
          </div>
        </nav>
      </Navdiv>
      <Navdivdesktop
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
          transition: ".8s",
          background: !scrolled ? "transparent" : "#1a1a1a",
          height: !scrolled ? "8rem" : "5rem",
        }}
      >
        <div
          className="header-container"
          style={{ marginTop: !scrolled ? "3rem" : 0, transition: ".3s" }}
        >
          <div
            className="header-ham"
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              marginLeft: "auto",
            }}
          >
            <NavLink to="/">
              <div style={{ width: "10px", marginLeft: "5.5rem" }}>
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "white",
                    marginLeft: "1rem",
                  }}
                >
                  ImportWin
                </h1>
              </div>
            </NavLink>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "1rem",
                // color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              <NavLink to="/profile">
                <div className="dropdown">
                  <button className="dropbtn">Profile</button>
                </div>
              </NavLink>
              <NavLink to="/add-product" style={{ color: "#FFF" }}>
                <div style={{ textDecoration: "none" }}>Add Product</div>
              </NavLink>

              {currentUser ? (
                <div className="dropdown" onClick={Logout}>
                  <button className="dropbtn">Logout</button>
                </div>
              ) : (
                <NavLink to="/login">
                  <div className="dropdown">
                    <button className="dropbtn">Login/Signup</button>
                  </div>
                </NavLink>
              )}

             

              <div style={{ marginRight: "6.5rem" }}>
                {wallet && wallet.address ? (
                  <div
                    className="border-gradient2"
                    style={{
                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      width: "10rem",
                      height: "3rem",
                      borderRadius: "10px",
                      border: "none",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    <>
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key="0">
                              <NavLink to="/profile">
                                <div style={{ textDecoration: "none" }}>
                                  Profile (
                                  {wallet.address.substring(0, 5) +
                                    "..." +
                                    wallet.address.slice(-4)}
                                  )
                                </div>
                              </NavLink>
                            </Menu.Item>
                            
                          </Menu>
                        }
                        trigger={["click"]}
                      >
                        <a
                          style={{
                            color: "white",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                          onClick={(e) => e.preventDefault()}
                        >
                          {wallet.address.substring(0, 5) +
                            "..." +
                            wallet.address.slice(-4)}
                        </a>
                      </Dropdown>
                    </>
                  </div>
                ) : (
                  <div
                    style={{
                      borderRadius: "8px",
                      border: "none",
                    }}
                  >
                    {window.ethereum ? (
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.9rem",
                          width: "10rem",
                          borderRadius: "10px",
                          border: "none",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        className="border-gradient"
                        onClick={() => {
                          dispatch(addMetamask());
                        }}
                      >
                        Connect Wallet
                      </button>
                    ) : (
                      <a href="https://metamask.io/download/">
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.9rem",
                            width: "10rem",
                            borderRadius: "10px",
                            border: "none",
                            fontFamily: "Montserrat, sans-serif",
                          }}
                          className="border-gradient"
                        >
                          Install MetaMask
                        </button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Drawer
          placement="left"
          visible={showDrawer}
          onClose={() => setShowDrawer(false)}
          width={"80%"}
          // size={"large"}
          className="drawer"
          drawerStyle={{ backgroundColor: "#1a1a1a" }}
          title={<div className="drawer-title">MENU</div>}
          headerStyle={{
            backgroundColor: "#1a1a1a",
            padding: 0,
            border: "none",
          }}
        >
          <Drawerroutes
            {...props}
            closeDrawer={() => setShowDrawer(false)}
          ></Drawerroutes>
        </Drawer>
      </Navdivdesktop>
      <ConnectWallet />
    </>
  );
};

export default NavBar;

import "../assets/css/Navbar1.css";
import Logo from "../assets/images/logo.svg";
import Logoname2 from "../assets/images/Logoname.png";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logos, NavbarM, Options, Item, GradientButton } from "../assets/css/Navbar1";
// import bg from "./style/images/background.png"
import img from "../assets/images/background.png";

const Navdiv = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  background-image: url(${img});
  width:100px;
  height:100px;
  background-color: red;

`;
const NavBar = (props) => {
  return (
    <>
      <Navdiv>
        <nav
          role="navigation"
          style={{ display: "flex", justifyContent: "space-between",fontFamily:"'Rubik', sans-serif",}}
        >
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <button>
                <Link to="/team">
                  <li style={{fontSize:"14px"}}> Team and Advisors</li>
                </Link>
              </button>

              <a
                href="https://www.mercado.studio/"
                target="_blank"
                rel="noreferrer"
              >
                <li>mercado studio</li>
              </a>
              
              <a
                style={{ textDecoration: "none" }}
                href={"/whitepaper"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GradientButton
                  style={{
                    width: "fit-content",
                    marginLeft: "-4px",
                    marginTop: "10px",
                    fontSize:"12px"
                  }}
                >
                  Download Whitepaper
                </GradientButton>
              </a>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </nav>
      </Navdiv>
      <NavbarM>
        <Logos>
          <Link to="/">
            <img style={{ marginRight: "1rem" }} src={Logo} alt="company" />
            <img src={Logoname2} alt="company" />
          </Link>
        </Logos>
        <Options>
          <a
            href="https://www.mercado.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                background: "none",
                fontFamily: "'Rubik', sans-serif",
                letterSpacing: "0.02em",
                fontStyle:"normal"
              }}
            >
              <Item>mercado.studio</Item>
            </button>
          </a>
          <Link to="/team" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                background: "none",
                fontFamily: "'Rubik', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
                
              }}
            >
              <Item>Team and Advisors</Item>
            </button>
          </Link>
          <a
            href="mailto:girish@createprotocol.org"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                fontSize: "17px",
                fontWeight: "normal",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                background: "none",
                fontFamily: "'Rubik', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              <Item>Contact</Item>
            </button>
          </a>

          <a
            style={{ textDecoration: "none" }}
            href={"/whitepaper"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton
              style={{
                width: "fit-content",
              
              }}
            >
              Download Whitepaper
            </GradientButton>
          </a>
        </Options>
      </NavbarM>
    </>
  );
};

export default NavBar;

import styled from "styled-components";
import Settingsline from "../assets/images/settingsline.png";
import Profile from "../assets/images/settings_profile.png";
import Notif from "../assets/images/settings_notif.png";
import Offr from "../assets/images/settings_offer.png";
import Account from "../assets/images/settings_account.png";

const Smalltext = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;
const Largetext = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
  color: #ffffff;
  cursor:pointer;
`;

const Settingsfiltercard = ({ state, dispatch }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem 1rem",
        background: "#131313",
        borderRadius: "1rem",
        height: "15rem",
      }}
    >
      <Smalltext>SETTINGS</Smalltext>
      <img src={Settingsline} alt="1" style={{ width: "100%" }} />
      <Largetext
        style={{
          fontWeight: state.Profile ? "bold" : "normal",
          fontSize: state.Profile ? "16px" : "13px",
        }}
        onClick={() => dispatch({ type: "Profile" })}
      >
        <img src={Profile} alt="1" style={{ marginRight: "4%" }} />
        Profile
      </Largetext>
      <img src={Settingsline} alt="1" style={{ width: "100%" }} />
      <Largetext
      style={{
        fontWeight: state.Notif ? "bold" : "normal",
        fontSize: state.Notif ? "16px" : "13px",
      }}
      onClick={() => dispatch({ type: "Notif" })}>
        <img src={Notif} alt="1" style={{ marginRight: "4%" }} />
        Notifications
      </Largetext>
      <img src={Settingsline} alt="1" style={{ width: "100%" }} />
      <Largetext
      style={{
        fontWeight: state.Offer ? "bold" : "normal",
        fontSize: state.Offer ? "16px" : "13px",
      }}
      onClick={() => dispatch({ type: "Offer" })}>
        <img src={Offr} alt="1" style={{ marginRight: "4%" }} />
        Offers
      </Largetext>
      <img src={Settingsline} alt="1" style={{ width: "100%" }} />
      <Largetext
      style={{
        fontWeight: state.Account ? "bold" : "normal",
        fontSize: state.Account ? "16px" : "13px",
      }}
      onClick={() => dispatch({ type: "Account" })}>
        <img src={Account} alt="1" style={{ marginRight: "4%" }} />
        Account Support
      </Largetext>
    </div>
  );
};

export default Settingsfiltercard;

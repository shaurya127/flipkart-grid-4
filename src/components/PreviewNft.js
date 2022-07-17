import React from "react";
import "../assets/css/preview.css";
import bg from "../assets/images/bg.png";
import vnft from "../assets/images/vnft.png";
const Previewnft = (props) => {
  const pairs = [
    { key: "NFT TITLE", value: "NATURE GLITCH MANDALA 01" },
    { key: "CREATED BY", value: "LZY.LAD" },
    { key: "CURRENT BID", value: "3.33Ξ" },
  ];
  const otherPairs = [
    { key: "CATEGORY", value: "SINGLE EDITION" },
    { key: "STATUS", value: "ONGOING AUCTION" },
    { key: "OWNED BY", value: "LZY.LAD" },
  ];

  const longPairs = [
    {
      key: "DETAILED DESCRIPTION",
      value:
        'EXPLORING THE CONCEPT OF GLITCH, LZY LAD HAS COME UP WITH A SERIES OF DIGITAL ART THAT FOLLOWS A TRAIL OF QUESTIONS, " WHAT IF NATURE STARTS GLITCHING OUT" ?',
    },
    {
      key: "TOKEN ADDRESS :",
      value: "BC1QAR0SRRR7XFKVY5L643LYDNW9RE59GTZZWF5MDQ",
    },
    {
      key: "RELEVANT TAGS",
      value: "#DIGITALART #NATUREGLITCH #MANDALA #GREEN",
    },
  ];

  return (
    <div className="px-4">
      <div
        className="bg-poster-container "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div className="preview-details-container">
          {pairs?.map((pair, i) => (
            <div className="key-value-pair" key={i}>
              <div className="key">{pair?.key}</div>
              <div className="value">{pair?.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="preview-details-container py-4">
        {otherPairs?.map((pair, i) => (
          <div className="key-value-pair" key={i}>
            <div className="key-other">{pair?.key}</div>
            <div className="value-other">{pair?.value}</div>
          </div>
        ))}
        <div
          className="preview-action-btn"
          onClick={() => props.history.push("/PLACE-A-BID")}
        >
          PLACE A BID
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {longPairs?.map((pair, i) => (
          <div className="key-value-pair my-4" key={i}>
            <div className="key-other">{pair?.key}</div>
            <div className="value-other">{pair?.value}</div>
          </div>
        ))}
      </div>
      <div className="preview-action-container my-4">
        <div className="preview-action-btm-btn">SHARE WITH FRIENDS</div>
        <div className="preview-action-btm-btn">GO TO DASHBOARD</div>
      </div>
      <div className="center p-2">
        <img src={vnft} alt="vlue" style={{ width: "100%" }}></img>
      </div>
    </div>
  );
};

export default Previewnft;

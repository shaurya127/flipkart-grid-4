import React from "react";

const Nftcontainer = (props) => {
  return (
    <div>
      <div className="nft-card-container">
        <div className="nft-img-container">
          <img className="nft-img" src={props.logo} alt="logo"></img>
        </div>
        <div className="nft-details-container">
          <div className="nft-details">
            <div className="nft-title clr">{props.title}</div>
            <div className="nft-rating clr">{props.rating}</div>
          </div>
          <div className="author-details row">
            <div className="nft-author-img-container">
              <img
                className="nft-author-img"
                src={props.authorImg}
                alt="logo"
              ></img>
            </div>
            <div className="nft-author-title clr">{props.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftcontainer;

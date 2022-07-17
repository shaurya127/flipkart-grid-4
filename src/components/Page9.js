import React from "react";
import sqr from "../assets/images/sqr.jpg";
import cir from "../assets/images/cir.jpg";
const Page9 = () => {
  return (
    <div className="m-cont">
      <div className="m-head">
        <div className="m-mode">White Mode</div>
        <div className="m-title">MUZIX</div>
        <div className="m-cross">&times;</div>
      </div>
      <div className="m-filter">
        <div className="m-filter-item">
          <span></span>First Filter
        </div>
        <div className="m-filter-item">
          <span></span>Second Filter
        </div>
        <div className="m-filter-item">
          <span></span>Third Filter
        </div>
      </div>
      <div className="m-search">
        <input
          className="m-input form-control form-control-lg"
          placeholder={"Search for NFTs, Artists, Collectors..."}
        ></input>
      </div>
      <div className="m-card-container">
        <div className="m-card-title-container">
          <div className="m-card-title">NFTs</div>
          <div className="m-card-title-extra">view more results &gt; </div>
        </div>
        <div className="m-card-content">
          <div className="m-search-item">
            <div className="m-search-img-container">
              <img className="m-search-img" src={sqr} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Search term</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container">
              <img className="m-search-img" src={sqr} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Search term</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container">
              <img className="m-search-img" src={sqr} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Search term</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container">
              <img className="m-search-img" src={sqr} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Search term</div>
          </div>
        </div>
      </div>
      <div className="m-card-container">
        <div className="m-card-title-container">
          <div className="m-card-title">Artists</div>
          <div className="m-card-title-extra">view more results &gt; </div>
        </div>
        <div className="m-card-content">
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
        </div>
      </div>
      <div className="m-card-container">
        <div className="m-card-title-container">
          <div className="m-card-title">Collectors</div>
          <div className="m-card-title-extra">view more results &gt; </div>
        </div>
        <div className="m-card-content">
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
          <div className="m-search-item">
            <div className="m-search-img-container-cir">
              <img className="m-search-img-cir" src={cir} alt="logo"></img>
            </div>
            <div className="m-search-item-title">Lzy Lad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9;

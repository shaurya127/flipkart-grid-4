import React from "react";
import { Input, Select } from "antd";
import "../assets/css/search.css";
// import { FontAwes  omeIcon } from "@fortawesome/react-fontawesome";
import Searchtermlist from "./SearchTermList";

const { Option } = Select;
const Search = (props) => {
  const exploreOptions = [
    { label: "MUSIC", value: "1" },
    { label: "ARTIST", value: "2" },
  ];
  return (
    <div>
      <div className="search-input-container my-4">
        <Input 
          className="search-input"
          placeholder="&#xF002;  SEARCH FOR NFTS, ARTISTS, COLLECTIONS, TRACKS AND MORE!"
          style={{ fontFamily: "Arial 'Font Awesome 5 Free'",width:"100%",fontSize:"1rem"  }}
          size="large"
        ></Input>
      </div>
      <div className="search-drop-container">
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",width:`100%`}}>
        <div className="drop-item">
          <div className="drop-label">SEARCH</div>
          <div className="drop-select-container">
            <Select
              placeholder="Select"
              size="large"
              defaultActiveFirstOption={true}
              className="drop-select"
              dropdownClassName="drop-down-select"
            >
              {exploreOptions?.map((opt, i) => (
                <Option key={i} value={opt.value} className="drop-option">
                  {opt.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="drop-item">
          <div className="drop-label">BY</div>
          <div className="drop-select-container">
            <Select
              placeholder="Select"
              size="large"
              defaultActiveFirstOption={true}
              className="drop-select"
              dropdownClassName="drop-down-select"
            >
              {exploreOptions?.map((opt, i) => (
                <Option key={i} value={opt.value} className="drop-option">
                  {opt.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        </div>
      </div>
      <div>
        <Searchtermlist></Searchtermlist>
      </div>
    </div>
  );
};

export default Search;

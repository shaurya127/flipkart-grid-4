import React from "react";
import "../assets/css/drop.css";
import { Select } from "antd";
const { Option } = Select;
const Dropmenucontainer = (props) => {
  const exploreOptions = [
    { label: "MUSIC", value: "1" },
    { label: "ARTIST", value: "2" },
  ];
  return (
    <div>
      <div className="drop-container">
        <div className="drop-item">
          <div className="drop-label">EXPLORE</div>
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
  );
};

export default Dropmenucontainer;

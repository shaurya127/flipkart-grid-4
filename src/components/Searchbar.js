import React from "react";
import "font-awesome/css/font-awesome.min.css";
import SkeletonInput from "antd/lib/skeleton/Input";

const Searchbar = () => {
  return (
    <>
      <div className="search" style={{width:"19rem"}}>
        <input
          type="text"
          name="search"
          className="round"
          placeholder="&#xf002; Search"
          style={{marginRight:"0"}}
        />
      </div>
    </>
  );
};
export default Searchbar;

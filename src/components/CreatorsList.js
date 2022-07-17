import React from "react";
import pretty11 from "../assets/images/pretty image (11).jpg";
import pretty13 from "../assets/images/pretty image (13).jpg";
import pretty20 from "../assets/images/pretty image (20).jpg";
import pretty23 from "../assets/images/pretty image (23).jpg";
import Creatorcontainer from "./Creatorcontainer";
import "../assets/css/creator.css";
const Creatorslist = (props) => {
  const list = [
    {
      author: "LZY.LAD",
      authorImg: pretty11,
    },
    {
      author: "AMM.UL",
      authorImg: pretty13,
    },
    {
      author: "SMPRN",
      authorImg: pretty20,
    },
    {
      author: "KRSHNA",
      authorImg: pretty23,
    },
  ];
  return list.map((creator, i) => (
    <div key={i} className="m-2 ">
      <Creatorcontainer {...creator} ></Creatorcontainer>
    </div>
  ));
};

export default Creatorslist;

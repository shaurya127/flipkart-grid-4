import React from "react";
import sqr from "../assets/images/sqr.jpg";
import Profileaudiocard from "./ProfileAudiocard";
import { Link } from "react-router-dom";
const Profileaudiolist = (props) => {
  const list = [
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
    {
      logo: sqr,
      title: "GREEN MANDALA",
    },
  ];
  return (
    <div className="list-container row">
      {list.map((card, i) => (
        <div className="list-card col-sm-3" key={i}>
          <Link to={"/PREVIEW-NFT"}>
            <Profileaudiocard {...card}></Profileaudiocard>
          </Link>
        </div>
      ))}
    </div>

    // <div className="list-container row ">

    // </div>
  );
};

export default Profileaudiolist;

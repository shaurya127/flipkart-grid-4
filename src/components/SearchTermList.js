import React from "react";
import Nftslist from "./NFTsList";
import sqr from "../assets/images/sqr.jpg";
import cir from "../assets/images/cir.jpg";
import four from "../assets/images/four.png";
import Cardcontainer from "../containers/CardContainer";
import Creatorslist from "./CreatorsList";

const Searchtermlist = (props) => {
  return (
    <div>
      <div>
        <Cardcontainer
          title={'" SEARCH TERM "'}
          suffix={"RESULTS FOR"}
          prefix={"NTFS"}
        >
          <Nftslist sqr={sqr} cir={cir}></Nftslist>
        </Cardcontainer>
      </div>
      <div>
        <Cardcontainer
          title={'" SEARCH TERM "'}
          suffix={"RESULTS FOR"}
          prefix={"CREATORS"}
        >
          <Creatorslist></Creatorslist>
        </Cardcontainer>
      </div>
      <div>
        <Cardcontainer
          title={'" SEARCH TERM "'}
          suffix={"RESULTS FOR"}
          prefix={"COLLECTIONS"}
        >
          <Nftslist sqr={four} cir={cir}></Nftslist>
        </Cardcontainer>
      </div>
    </div>
  );
};

export default Searchtermlist;

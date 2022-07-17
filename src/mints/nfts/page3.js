import React from "react";
import Bot from "../bottom/bot";
import "./page2.css";
import "./margi.css";

function page3(props) {
  return (
    <div>
      <view className="buttonwork" style={{ marginTop: 20 }}>
        <view className="clickhere">
          <text style={{color:"white"}}>
            <br />
            ACCEPTABLE FORMATS: <br /> JPG. PNG. GIF. MP4.
            <br /> OBJ. AVI. TXT. PDF. TIFF
          </text>
        </view>
        <view className="clickhere uplod">
          <text style={{color:"white"}}>
            <br />
            file uploaded <br /> successfully
          </text>
        </view>
        <view className="clickhere">
          <text style={{color:"white"}}>
            <br />
            VIEW OUR GUIDELINES <br /> FOR CREATING NFTS
          </text>
        </view>
      </view>
      <view style={{margin: 20}}>
        <h2> What type of nft is this?</h2>
        <form
          className="uploadoc"
          action="/action_page.php"
          style={{ display: "inline-block", marginTop:20 }}
        >
          <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> collectible</label>
          <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> single edition</label>
          <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> multiple editions</label>
          <br />
        </form>
      </view>
      <br />
      <h2 style={{marginTop: 60}}>choose how you would like to list your nft</h2>
      <br />
      <view className="aution_sell">
        <text className="heading">fixed price</text>
        <label className="switch" style={{marginLeft: 20}}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <text className="heading">auction</text>
      </view>
      <br />
      <h2 style={{marginTop: 30}}>enter fixed price</h2>
      <br />
      <form action="/action_page.php" style={{ color: "white" }}>
        <input
          className="entertxtfill"
          type="text"
          id="fname"
          name="fname"
          value="enter price in eth"
        />
        <br />
      </form>
      <h2 style={{marginTop: 30}}> choose royalty %</h2>
      <br />
      <form action="/action_page.php" style={{ color: "white" }}>
        <input
          className="entertxtfill"
          type="text"
          id="fname"
          name="fname"
          value="enter royalty %"
        />
        <br />
      </form>
      <Bot />
      <view className="buttonwork">
      <button
        style={{marginBottom: "20"}}
        className="butto"
        type="button"
        onClick={() => props.history.push("/page4")}
      >
        NEXT PAGE
      </button>
      </view>
    </div>
  );
}

export default page3;

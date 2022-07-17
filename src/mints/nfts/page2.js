import React from "react";
import Bot from "../bottom/bot";
import "./page2.css";
import "./margi.css";

function page2(props) {
  return (
    <div>
      <h2>CHOOSE A NFT Category</h2>
      <form className="uploadoc" action="/action_page.php" style={{ display: "inline-block" }}>
        <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> IMAGE</label>
        <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> Audio</label>
        <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> Video</label>
        <input type="radio" id="vehicle4" name="vehicle2" value="Car" />
        <label for="vehicle4"> 3D</label>
        <input type="radio" id="vehicle5" name="vehicle2" value="Car" />
        <label for="vehicle5"> PHYSICAL GOODS</label>
      </form>
      <br />
      <view style={{ marginTop: 20 }}><view className="clickhere"><text style={{color:"white"}}><br/>
            ACCEPTABLE FORMATS: <br /> JPG. PNG. GIF. MP4.
            <br /> OBJ. AVI. TXT. PDF. TIFF
          </text>
        </view>
        <view className="clickhere uplod">
          <text style={{color:"white"}}>
            <br />
            CLICK HERE TO <br /> UPLOAD A FILE
            <br /> OR <br /> DROP A FILE HERE
          </text>
        </view>
        <view className="clickhere">
          <text style={{color:"white"}}>
            <br />
            VIEW OUR GUIDELINES <br /> FOR CREATING NFTS
          </text>
        </view>
      </view>
      <view>
        <form
          action="/action_page.php"
          className="formfill"
          style={{ color: "white" }}
        >
          <label for="fname">NAME YOUR NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="fname"
            name="fname"
            value="LET'S START WITH GIVING A UNIQUE NAME TO YOUR WORK OF ART"
          />
          <br />
          <label for="lname">ADD RELEVANT TAGS</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="ADD # TAGS TO MAKE YOUR NFT MORE DISCOVERABLE"
          />
          <br />
          <label for="lname">CHOOSE A CATEGORY FOR YOUR NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="LET'S START WITH GIVING A UNIQUE NAME TO YOUR WORK OF ART"
          />
          <br />
          <label for="lname">WRITE A DETAILED DESCRIPTION OF THE NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="WRITE YOUR STORY BEHIND THE NFT. WHY IT IS THE WAY IT CREATED"
          />
          <br />
        </form>
      </view>
      <Bot />
      <button
        className="cnetrbutton"
        type="button"
        onClick={() => props.history.push("/page3")}
      >
        NEXT PAGE
      </button>
    </div>
  );
}

export default page2;

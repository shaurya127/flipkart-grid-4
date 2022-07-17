import React from "react";
import Bot from "../bottom/bot";
import "./page2.css"
import "./margi.css"
import Addcolab from "../headers/addcolab";


function page4(props) {
  return (
    <div style={{width:"100%"}}>
      <Addcolab />  
      <br />
      <view className="row creator" >
        <view className="centro" style={{display:"flex",width:"100%",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginLeft:"0"}}>
          <form style={{textAlign:"center"}}>
            Name of the creator
            <br />
            <textarea
              className="txt_box"
              rows="1"
              value="start with @"
              cols="30"
              style={{marginLeft:"",width:""}}
            ></textarea>
          </form>
          <form style={{textAlign:"center"}}>
            Role
            <br />
            <textarea
              className="txt_box"
              rows="1"
              value="specify a role"
              cols="30"
              style={{marginLeft:""}}
            ></textarea>
          </form>
          <form style={{textAlign:"center"}}>
            ROYALTY SPLIT %<br />
            <textarea
              className="txt_box"
              rows="1"
              value="enter a %"
              cols="30"
              style={{marginLeft:""}}
            ></textarea>
          </form>
        </view>
      </view>
      <br />
      <p className="autorize"> + Add more collaborators</p>
      <Bot />
      <view className="buttonwork">
        <button
          className="butto"
          type="button"
          onClick={() => props.history.push("/page5")}
        >
          NEXT PAGE{" "}
        </button>
      </view>
    </div>
  );
}

export default page4;

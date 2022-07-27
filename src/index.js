import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Mobilepage from './components/MobilePage'
import window from 'global'


ReactDOM.render(
  <React.StrictMode>
   {window.innerWidth <500 ? (
       <Mobilepage/>
      ) : <App/>}
    
  </React.StrictMode>,
  document.getElementById("root")
);



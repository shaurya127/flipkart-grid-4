import React from "react";
import styled from "styled-components";
import Sellerimg from '../assets/images/sellerimg.png'
import Tick from '../assets/images/tick.png'

const TopSeller=styled.div`
height:6rem;
width:15rem;
background:#121212;
border-radius:1rem;
margin-left:1rem;
display:flex;
align-items:center;
// justify-content:center;
padding:1rem;
`
const Seller=()=>{
 return(
<TopSeller>
            <div>
              <img style={{width:"3.5rem",height:"3.5rem",position:"relative",top:"0",left:"0"}} src={Sellerimg} alt="sel"/>
              <img style={{width:"1.5rem",height:"1.5rem",position:"absolute",transform:"translate(-50%,150%)"}} src={Tick} alt="sel"/>

            </div>
            <div style={{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",marginLeft:"1.5rem",width:"70%"}}>
              <div style={{color:"white",fontWeight:"bold",fontSize:".9rem"}}>Abdul Ahmed</div>
              <div style={{color:"white",fontSize:".7rem",color:"#C1C1C1",lineHeight:"0.8rem"}}>@abduul</div>
              <div style={{color:"white",fontSize:".8rem",fontWeight:"500",color:"#FF007A",fontWeight:"bold",marginTop:".3rem"}}>100.20ETH</div>
            </div>
          </TopSeller>
 )
}


export default Seller;

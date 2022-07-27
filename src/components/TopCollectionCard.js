import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

// import TopCollection from '../assets/images/topcollections.png'

const Textcomp = styled.div`
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 2.2rem;
color: #FFFFFF;

`
const Flexdis = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const Maindiv = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.53125) 48.96%, rgba(55, 55, 55, 0.8) 100%);
opacity: 0.75;
box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
display:flex;
align-items:center;
justify-content:space-between;
padding:0.5rem 0;
border-radius:1rem;
margin-top:.5rem;
`
const TopCollectionCard = (props) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const collectionTop = [
            "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
            "0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF",
            "0x4E1f41613c9084FdB9E34E11fAE9412427480e56",
            "0xcE25E60A89F200B1fA40f6c313047FFe386992c3",
            "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D",
            "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
            "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
            "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
            "0xCa7cA7BcC765F77339bE2d648BA53ce9c8a262bD"

        ]
        const collectionTopArr = [...collectionTop] // To collect data of 5 NFTs

        const responseAllNFT = await Promise.all(
            collectionTopArr.map(async (ele, index) => {
                const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + ele + '/' + '?chain=eth',
                    { 'headers': { "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip' } });
                return res.data;
            })
        );
        setData(responseAllNFT);
        console.log("response");
        console.log(responseAllNFT[0]);
    }


    useEffect(() => {
        fetchData();

    })
    return (
        <div style={{ display: "flex" }}>
            {/* <Flexdis style={{color:"#BA68C8",width:"3%",fontWeight:"bold"}}>1.</Flexdis> */}
            <Maindiv style={{ width: "100%", height: "7rem", display: "flex" }}>

                <Flexdis style={{ width: "20%", paddingLeft: "1rem" }}>
                    {/* <img src={TopCollection} alt="im" /> */}
                    <Textcomp>Super liquids</Textcomp>
                </Flexdis>
                <Flexdis style={{ width: "40%" }}>
                    <Textcomp>2.882 BNB</Textcomp>
                    <Textcomp style={{ color: "#FF1111" }}>-31.7%</Textcomp>
                    <Textcomp style={{ color: "#41BA08" }}>+433.9%</Textcomp>
                    <Textcomp>0.00788BNB</Textcomp>
                </Flexdis>
                <Flexdis style={{ width: "15%", padding: "0 1rem" }}>
                    <Textcomp>66</Textcomp>
                    <Textcomp>96</Textcomp>
                </Flexdis>

            </Maindiv>
        </div>
    )
}

export default TopCollectionCard
